const TodoItem = ({ todoName, todoDate }) => {
  return (
    <div className="container">
      <div className="row sh-row">
        <div className="col-sm-5">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-danger sh-button item-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
