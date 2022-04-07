import '../assets/css/App.css';
import {TodoInput} from "../components/TodoInput";
import {TodoList} from "../components/TodoList";
import {useEffect, useState} from "react";
import {Layout} from "../layout/Layout";
import {TodoService} from "../lib/TodoService";

export const Main = ({todoStorage}) => {
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
        <Layout>
            <TodoInput {...todoInputProps}/>
            <TodoList {...todoListProps}/>
        </Layout>
    );
}
