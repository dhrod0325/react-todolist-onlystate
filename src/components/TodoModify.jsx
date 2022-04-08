export const TodoModify = ({
                               todo,
                               handleModifySaveTodo,
                               handleModifyTodo,
                               onChange,
                               input,
                               inputEdit
                           }) => {
    const {message, id} = todo;

    if (!inputEdit[id]) {
        return (<span onClick={handleModifyTodo(todo)}>{!inputEdit[todo.id] && todo.message}</span>);
    }

    return (
        <>
            <span>{message}</span>

            <form onSubmit={handleModifySaveTodo(todo)}
                  className="d-flex gap-2 mt-2">

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
            </form>
        </>
    );
}
