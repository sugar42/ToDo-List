'strict mode'; 

const markTodoAsDone = function ({ store }) {
    return async function (req, res){
        const { id } = req.params.id;
        try {
        await store.markTodoAsDone({ id});
        } catch {   
        return res.status(404).end();
        }
    }; 
}; 

module.exports = { markTodoAsDone}; 



