import {useState} from "react";
import {TodoItem} from "./TodoItem";

export const TodoList = ({todoList, removeTodo, changeCheckedTodo, saveTodo}) => {
    const [input, setInput] = useState('');
    const [inputEdit, setInputEdit] = useState({});

    const handleCheckChanged = (todo) => {
        return e => {
            changeCheckedTodo(todo, e.target.checked);
        };
    }

    const handleRemoveButtonClicked = (todo) => {
        return () => {
            removeTodo(todo);
        };
    }

    const handleModifyTodo = (todo) => {
        return e => {
            e.preventDefault();

            Object.keys(inputEdit).filter(key => key !== todo.id).forEach(key => inputEdit[key] = false);
            inputEdit[todo.id] = !inputEdit[todo.id];

            setInput(todo.message);
            setInputEdit({...inputEdit});
        };
    }

    const handleModifySaveTodo = (todo) => {
        return e => {
            e.preventDefault();

            if (!input) {
                return alert('할 일을 입력하세요');
            }

            Object.keys(inputEdit).forEach(key => inputEdit[key] = false);
            setInputEdit({...inputEdit});
            saveTodo(todo, input);
        };
    }

    const onChange = e => {
        setInput(e.target.value);
    }

    const props = {
        input,
        inputEdit,
        handleCheckChanged,
        handleModifySaveTodo,
        handleModifyTodo,
        handleRemoveButtonClicked,
        onChange
    }

    return (<div className="list-wrapper">
        <ul className="d-flex flex-column-reverse todo-list" role="todoList">
            {todoList.map(todo => <TodoItem {...props} todo={todo} key={todo.id}/>)}
        </ul>
    </div>);
}
