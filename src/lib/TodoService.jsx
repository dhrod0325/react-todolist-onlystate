export const TodoService = (todoList) => {
    return {
        add: (todo) => {
            return [...todoList, todo];
        },
        remove: (todo) => {
            todoList.splice(todoList.indexOf(todo), 1);
            return [...todoList];
        },
        update: (old, newTodo) => {
            const result = [...todoList];
            result.splice(result.indexOf(old), 1, {...old, ...newTodo});
            return result;
        }
    }
}
