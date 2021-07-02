import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todoList: PropTypes.array,
  handleClickTodo: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  handleClickTodo: null
}

function TodoList(props) {
  const { todoList, handleClickTodo } = props
  return (
    <ul className="todo-list">
      {todoList.map(todo => (
        <li
          key={todo.index}
          onClick={() => handleClickTodo(todo.index)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;