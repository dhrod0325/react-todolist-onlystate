export const TodoItem = ({
                             todo,
                             handleCheckChanged,
                             handleModifySaveTodo,
                             handleModifyTodo,
                             handleRemoveButtonClicked,
                             input,
                             inputEdit,
                             onChange
                         }) => {

    return (
        <li role="todoListItem">
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
                               value={input}
                               className="form-control"/>

                        <button className="btn btn-sm btn-primary">저장</button>

                        <button type="button"
                                className="btn btn-sm btn-danger"
                                onClick={handleModifyTodo(todo)}>
                            취소
                        </button>
                    </form> :
                    <span onClick={handleModifyTodo(todo)}>{!inputEdit[todo.id] && todo.message}</span>}
            </div>

            <i className="remove mdi mdi-close-circle-outline"
               onClick={handleRemoveButtonClicked(todo)}
               role="removeTodo"/>
        </li>)
}
