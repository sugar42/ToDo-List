'use strict';

//setup function -> higher order function
const getTodos = function ({ store }) {
    //await only in async functions 
    return async function (req, res) {
        const todos = await store.getRemainingTodos(); 
    res.json(remainingTodos);
   };
};


module.exports = { getTodos }; 