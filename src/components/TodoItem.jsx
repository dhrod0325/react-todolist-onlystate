import {TodoModify} from "./TodoModify";

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

    const {checked} = todo;

    return (
        <li role="todoListItem">
            <div className="form-check">
                <label className="form-check-label">
                    <input className="checkbox"
                           type="checkbox"
                           checked={checked}
                           onChange={handleCheckChanged(todo)}
                           role="todoChecked"/>
                    <i className="input-helper"/>
                </label>

                <TodoModify {...{
                    todo,
                    handleModifySaveTodo,
                    handleModifyTodo,
                    onChange,
                    input,
                    inputEdit
                }}/>

            </div>

            <i className="remove mdi mdi-close-circle-outline"
               onClick={handleRemoveButtonClicked(todo)}
               role="removeTodo"/>
        </li>)
}
