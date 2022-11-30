'use strict';

//imported modules
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
//import with relative path
const { getTodos } = require('./routes/getTodos');
const { noteTodo } = require('./routes/noteTodo');
const { markTodoAsDone } = require('./routes/markTodoAsDone');


const getApi = function() {
    const api = express();

    //middelware
    //before defining routes 
    //after initializing express obeject -> express()
    api.use(cors());
    api.use(bodyParser.json());
    
    //Commands -> routes which have no return value but will change the status
    //CQRS Pattern
    api.post('/note-todo', noteTodo());
    api.post('/mark-todo-as-done/:id', markTodoAsDone({ store }));
    //Queries  
    api.get('/todos', getTodos({ store }));

    return api; 
};

//export object to export several functions
module.exports = { getApi };

//module.exports = getApi; -> exports only getApi

