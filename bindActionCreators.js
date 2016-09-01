
let TodoActionCreators = {
    addTodo(text) {
        return {
            type: 'ADD_TODO',
            text
        };
    },
    removeTodo(id) {
        return {
            type: 'REMOVE_TODO',
            id
        };
    }
}

console.log(TodoActionCreators);