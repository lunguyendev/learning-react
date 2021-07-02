import React, { useState, useEffect } from 'react';
import TodoList from '../../components/TodoList';
import { useLocation, useHistory, useRouteMatch } from "react-router-dom"
import queryString from "query-string"

function ListPage(props) {
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

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList)

  const [filterStatus, setFilterStatus] = useState(() => {
    const status = queryString.parse(location.search).status
    return status || "all"
  })

  useEffect(() => {
    const param = queryString.parse(location.search);
    setFilterStatus(param.status || "all")
  }, [location.search])

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
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams)
    });
  }

  const handleShowNewClick = () => {
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams)
    });
  }

  const handleShowCompletedClick = () => {
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams)
    });
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

export default ListPage;