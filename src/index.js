import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { todoStore } from "./store";

ReactDOM.render(
  <Provider store={todoStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);