import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';

const todoList = [
  { id: 1, title: 'I love Easy Frontend! 😍 ' },
  { id: 2, title: 'We love Easy Frontend! 🥰 ' },
  { id: 3, title: 'They love Easy Frontend! 🚀 ' },
]

function handleTodoClick(todo) {
  console.log(todo)
}

function App() {
  return (
    <div className="app">
      <ColorBox />
      <TodoList todo={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
