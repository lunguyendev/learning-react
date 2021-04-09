import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todo: PropTypes.array,
  onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
  todo: [],
  onTodoClick: null
}

function TodoList(props) {
  const { todo, onTodoClick } = props

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo)
    }
  }

  return (
    <ul className="todo-list">
      {
        todo.map(item => (
          <li
            key={item.id}
            onClick={() => handleClick(item)}
          >
            {item.title}
          </li>
        ))
      }
    </ul>
  );
}

export default TodoList;