import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import TodoApp from './components/TodoApp'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
export default App;
