import { MdDelete } from "react-icons/md";

const TodoItem = ({ todoName, todoDate, onClickDelete }) => {
  return (
    <div className="container">
      <div className="row sh-row">
        <div className="col-sm-5">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-danger sh-button item-button"
            onClick={() => onClickDelete(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
