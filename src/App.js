import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoStore, create } from "./store";
import AppLoader from "./components/loader";
import TodoApp from "./container";




const App = () => {
  const dispatch = useDispatch();
  const { todoList: { loading } } = useSelector(state => state)
  /**
   * INITIALIZING FETCH API
   */
  useEffect(() => {
    fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
      .then(data => data.json())
      .then(result => dispatch(create({ loading: false, data: result })))
  }, []);

  /**
   * GIVE LOADING STATE
   * TO RENDER LOADING SCREEN
   * WHILE FETCHING DATA
   */
  if (loading) { return <AppLoader /> };
  return (
    <TodoApp />
  );
}

export default App;
