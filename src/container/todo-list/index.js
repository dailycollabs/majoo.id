import { useState } from "react"
import { useDispatch } from "react-redux";
import TodoModal from "../todo-modal";
import TodoUpdateForm from "../todo-update-form";
import { remove } from "../../store";

const TodoList = ({ children, data }) => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const onToggleModal = () => {
    return setToggle(!toggle);
  };

  const onDeleteTodoList = (id) => {
    dispatch(remove({
      data: {
        id: parseInt(id, 10)
      }
    }))
  }

  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="text-mute d-flex justify-content-between align-items-center">
          {data.title}
          <div className="list-action">
            <button className="btn btn-sm btn-danger mx-1" onClick={() => onDeleteTodoList(data.id)}>Delete</button>
            <TodoModal isOpen={toggle} onToggleModal={onToggleModal}>
              <h4>{data.title}</h4>
              <p className="text-muted">{data.description}</p>
              <hr />
              <TodoUpdateForm data={data} onToggleModal={onToggleModal} />
            </TodoModal>
          </div>
        </div>
      </div>
    </div>
  );
}


export default TodoList;