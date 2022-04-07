import {useState} from "react";

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

    return (<div className="list-wrapper">
            <ul className="d-flex flex-column-reverse todo-list" role="todoList">
                {todoList.map(todo => <li key={todo.id} role="todoListItem">
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="checkbox"
                                   type="checkbox"
                                   checked={todo.checked}
                                   onChange={handleCheckChanged(todo)}
                                   role="todoChecked"/>
                            <i className="input-helper"/>
                        </label>
                        {inputEdit[todo.id] ?
                            <form onSubmit={handleModifySaveTodo(todo)} style={{display: "inline-block"}}>
                                <input type="text"
                                       onChange={onChange}
                                       value={input}/>
                                <button>save</button>
                                <button type="button"
                                        onClick={handleModifyTodo(todo)}>
                                    cancel
                                </button>
                            </form> :
                            <span onClick={handleModifyTodo(todo)}>{!inputEdit[todo.id] && todo.message}</span>}
                    </div>

                    <i className="remove mdi mdi-close-circle-outline"
                       onClick={handleRemoveButtonClicked(todo)}
                       role="removeTodo"/>
                </li>)}
            </ul>
        </div>);
}
