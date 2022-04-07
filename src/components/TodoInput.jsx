import {createRef, useEffect, useState} from "react";
import {v4 as uuid} from "uuid";

export const TodoInput = ({addTodo}) => {
    const [input, setInput] = useState('');

    const $input = createRef();

    useEffect(() => {
        $input.current.focus();
    }, []);

    const addInput = event => {
        event.preventDefault();

        if (!input) {
            $input.current.focus();
            return alert('할일을 입력하세요');
        }

        addTodo({id: uuid(), message: input, checked: false, editState: false});

        setInput('');
        $input.current.value = '';
    }

    const onChange = e => {
        setInput(e.target.value);
    }

    return (
        <form className="add-items d-flex" onSubmit={addInput}>
            <input type="text"
                   ref={$input}
                   id="input"
                   className="form-control todo-list-input"
                   placeholder="해야 할 일을 입력하세요"
                   onChange={onChange}
                   role="todoInput"/>

            <button className="add btn btn-primary font-weight-bold"
                    role="addTodoButton">
                Add
            </button>
        </form>
    );
}
