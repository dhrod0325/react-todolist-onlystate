import {TodoInput} from "./TodoInput";
import {TodoList} from "./TodoList";
import {useEffect, useState} from "react";
import {TodoService} from "../lib/TodoService";

export const TodoContainer = ({todoStorage}) => {
    const [todoList, setTodoList] = useState(todoStorage.getList());

    const todoService = TodoService(todoList);

    useEffect(() => {
        todoStorage.save(todoList);
    }, [todoList]);

    const onSubmitInput = (todo) =>
        setTodoList(todoService.add(todo));

    const onClickRemove = (todo) =>
        setTodoList(todoService.remove(todo));

    const onChangeCheck = (todo, checked) =>
        setTodoList(todoService.update(todo, {checked}));

    const onSubmitModify = (todo, message) =>
        setTodoList(todoService.update(todo, {message}));

    const todoInputProps = {
        onSubmitInput
    };

    const todoListProps = {
        todoList,
        onClickRemove,
        onChangeCheck,
        onSubmitModify
    }

    return (
        <>
            <TodoInput {...todoInputProps}/>
            <TodoList {...todoListProps}/>
        </>
    );
}
