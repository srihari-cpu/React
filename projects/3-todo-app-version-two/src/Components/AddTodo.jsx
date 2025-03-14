import style from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row sh-row">
        <div className="col-sm-5">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-sm-4">
          <input type="date" />
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-success  sh-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
