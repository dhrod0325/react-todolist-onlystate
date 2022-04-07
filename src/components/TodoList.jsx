import {useState} from "react";

export const TodoList = ({todoList, removeTodo, changeCheckedTodo, saveTodo}) => {
    const [inputTodo, setInputTodo] = useState();
    const [editState, setEditState] = useState({});

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

            Object.keys(editState).filter(key => key !== todo.id).forEach(key => editState[key] = false);
            editState[todo.id] = !editState[todo.id];
            setInputTodo(todo.message);
            setEditState({...editState});
        };
    }

    const handleModifySaveTodo = (todo) => {
        return e => {
            e.preventDefault();

            if (!inputTodo) {
                return alert('할 일을 입력하세요');
            }

            Object.keys(editState).forEach(key => editState[key] = false);
            setEditState({...editState});
            saveTodo(todo, inputTodo);
        };
    }

    const onChange = e => {
        setInputTodo(e.target.value);
    }

    return (
        <div className="list-wrapper">
            <ul className="d-flex flex-column-reverse todo-list" role="todoList">
                {todoList.map(todo =>
                    <li key={todo.id} role="todoListItem">
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="checkbox"
                                       type="checkbox"
                                       checked={todo.checked}
                                       onChange={handleCheckChanged(todo)}
                                       role="todoChecked"/>
                                <i className="input-helper"/>
                            </label>
                            {editState[todo.id] ?
                                <form onSubmit={handleModifySaveTodo(todo)} style={{display: "inline-block"}}>
                                    <input type="text"
                                           onChange={onChange}
                                           value={inputTodo}/>
                                    <button>save</button>
                                    <button type="button" onClick={handleModifyTodo(todo)}>cancel</button>
                                </form> :
                                <span onClick={handleModifyTodo(todo)}>{!editState[todo.id] && todo.message}</span>}
                        </div>

                        <i className="remove mdi mdi-close-circle-outline"
                           onClick={handleRemoveButtonClicked(todo)}
                           role="removeTodo"/>
                    </li>
                )}
            </ul>
        </div>
    );
}
