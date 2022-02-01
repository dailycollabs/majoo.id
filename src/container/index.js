import { useSelector } from 'react-redux'
import TodoList from "./todo-list";
import TodoAddForm from "./todo-add-form";


/**
 * getOnProgressTodoList
 * @description filter and sort array based on rule number 3
 * @param array 
 * @returns [Object] 
 */
const getOnProgressTodoList = (array = []) => {
  return array
    .filter(({ status }) => status === 0)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
}

/**
 * getCompletedTodoList
 * @description filter and sort array based on rule number 3
 * @param array 
 * @returns [Object] 
 */
const getCompletedTodoList = (array = []) => {
  return array
    .filter(({ status }) => status === 1)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}



const TodoApp = () => {
  const { todoList: { data } } = useSelector((state) => state);

  console.log(data)

  const var_onProgressTodoList = getOnProgressTodoList(data);
  const var_completedTodoList = getCompletedTodoList(data);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h3>Todo Form</h3>
          <TodoAddForm />
        </div>
        <div className="col-md-4">
          <h3>On Progress Todo List</h3>
          {var_onProgressTodoList.map((data, i) => (
            <TodoList data={data} key={i} />
          ))}
        </div>
        <div className="col-md-4">
          <h3>Completed Todo List</h3>
          {var_completedTodoList.map((data, i) => (
            <TodoList data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;