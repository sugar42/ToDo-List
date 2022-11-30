'use strict';

class InMemoryStore {
    constructor() {
        // left blank
    }

    async initialize () {
        this.todos =  [];
    }

    async noteTodo ({ todo }) {
        this.todo.push(todo);
    }

    async markTodoAsDone({ id }){
        const todo = this.todos.find(todo => todo.id === id);

        if(!todo) {
            throw new Error('Todo not found.');
        }

        todo.status = 'done';
    }

    async getRemainingTododas () {
        //only return todos with status open
        return this.todos.filter(todo => todo.status === 'open');
    }
}

module.exports = { InMemoryStore };