import './App.scss';
import React, { useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import TodoFeature from './features/Todo'
import AlbumFeature from './features/Album'
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
import ColorBoxFeature from './features/LabUseState/ColorBox';
import TodoListFeature from './features/LabUseState/TodoList';
import productApi from './api/productApi';
function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const productList = await productApi.getAll();
      console.log(productList);
    }

    fetchProduct()
  }, [])
  return (
    <div className="App">
      <p><Link to="/todo-list">Todos</Link></p>
      <p><Link to="/albums">Albums</Link></p>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/color">Color</Link></p>
      <p><Link to="/lab/todolist">Lab Todo</Link></p>

      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/todo-list" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/color" component={ColorBoxFeature} />
        <Route path="/lab/todolist" component={TodoListFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
