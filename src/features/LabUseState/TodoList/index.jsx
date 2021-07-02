import React from 'react';
import { useState } from 'react/cjs/react.development';
import TodoList from './components/TodoList';

TodoListFeature.propTypes = {};

function TodoListFeature(props) {
  const todoLists = [
    {
      index: 1,
      title: "Learning Ruby on Rails"
    },
    {
      index: 2,
      title: "Learning ReactJs"
    },
    {
      index: 3,
      title: "Learning React Native"
    }
  ]

  const [todoList, setTodoList] = useState(todoLists)

  function handleClickTodo(value) {
    const newTodos = [...todoList]
    const index = newTodos.findIndex(({ index }) => index === value)

    if (index < 0) return console.log("Khong ton tai gia tri");
    newTodos.splice(index, 1)
    setTodoList(newTodos)
  }

  return (
    <div>
      <TodoList todoList={todoList} handleClickTodo={handleClickTodo} />
    </div>
  );
}

export default TodoListFeature;