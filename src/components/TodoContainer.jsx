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

    const addTodo = (todo) =>
        setTodoList(todoService.add(todo));

    const removeTodo = (todo) =>
        setTodoList(todoService.remove(todo));

    const changeCheckedTodo = (todo, checked) =>
        setTodoList(todoService.update(todo, {checked}));

    const saveTodo = (todo, message) =>
        setTodoList(todoService.update(todo, {message}));

    const todoInputProps = {addTodo};
    const todoListProps = {todoList, removeTodo, changeCheckedTodo, saveTodo}

    return (
        <>
            <TodoInput {...todoInputProps}/>
            <TodoList {...todoListProps}/>
        </>
    );
}
