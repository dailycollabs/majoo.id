import { useRef } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store";

/**
 * generateCreatedAt
 * @description return value to fullfill the createdAt property on object payload
 */
const getGenerateCreatedAt = () => {
  return `${new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'numeric', year: 'numeric'
  }).replace(/\//g, '-').split("-").reverse().join("-")} ${new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).replace(" AM", "").replace(" PM", "")}`
}


const TodoAddForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();


  const onSubmitTodo = () => {
    const var_todoAddPayload = {
      id: Math.floor(Math.random() * 100),
      title: inputRef.current.value || "",
      description: "lorem ipsum",
      status: 0,
      createdAt: getGenerateCreatedAt()
    }

    dispatch(add(var_todoAddPayload))
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="form-group col-8">
              <input type="text" className="form-control form-control-sm" ref={inputRef} />
            </div>
            <div className="form-group col-4">
              <button className="btn btn-success btn-sm" onClick={() => onSubmitTodo()}>+ Add todo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoAddForm;