import React, { useState } from 'react';
import TodoList from './components/TodoList';

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Sleep",
      status: "new"
    },
    {
      id: 2,
      title: "Eat",
      status: "completed"
    },
    {
      id: 3,
      title: "Code",
      status: "new"
    }
  ]

  const [todoList, setTodoList] = useState(initTodoList)
  const [filterStatus, setFilterStatus] = useState("all")

  const handleTodoClick = (todo, index) => {
    // clone current array to the new one
    const newTodoList = [...todoList];

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new"
    };

    setTodoList(newTodoList);
  }

  const handleShowAllClick = () => {
    setFilterStatus("all")
  }

  const handleShowNewClick = () => {
    setFilterStatus("new")
  }

  const handleShowCompletedClick = () => {
    setFilterStatus("completed")
  }

  const renderTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status)

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}> Show All</button>
        <button onClick={handleShowNewClick}> Show New</button>
        <button onClick={handleShowCompletedClick}> Show </button>
      </div>
    </div>
  );

}

export default TodoFeature;