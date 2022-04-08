import {v4 as uuid} from "uuid";

export const TodoService = (todoList) => {
    return {
        add: (todo) => {
            const addTodo = {id: uuid(), checked: false, editState: false, ...todo};

            return [...todoList, addTodo];
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
