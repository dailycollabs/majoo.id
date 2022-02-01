import { useRef } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../store";

const TodoUpdateForm = ({ data, onToggleModal }) => {

  const dispatch = useDispatch();
  const formRef = useRef({ status: null, description: null });

  const onTodoUpdate = (event) => {
    event.preventDefault();
    dispatch(update({
      data: {
        ...data,
        status: parseInt(formRef.current.status.value, 10),
        description: formRef.current.description.value,
      }
    }))
    return onToggleModal();
  }


  return (
    <form className="form-update mt-5" onSubmit={(e) => onTodoUpdate(e)}>
      <div className="form-group my-3">
        <label className="form-label">Want to add description ? </label>
        <input
          type="text"
          placeholder={data.description}
          className="form-control"
          defaultValue={data.description}
          ref={el => formRef.current['description'] = el} />
      </div>
      {data.status === 0 && <div className="form-group my-3">
        <label className="form-label">Is it done ? </label>
        <select
          className="form-control"
          defaultValue={data.status}
          ref={el => formRef.current['status'] = el}>
          <option value={0}>No, it is still on progress</option>
          <option value={1}>Yes, it is done</option>
        </select>
      </div>}
      <button className="btn btn-sm btn-success">Submit</button>
    </form>
  );
};

export default TodoUpdateForm;