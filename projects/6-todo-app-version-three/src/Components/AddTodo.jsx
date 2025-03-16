import { useState } from "react";
import style from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [itemName, setItemName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTodoName = (event) => {
    setItemName(event.target.value);
  };

  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };

  const handleNewItem = () => {
    if (itemName !== "" && dueDate !== "") {
      onNewItem(itemName, dueDate);
      setItemName("");
      setDueDate("");
    }
  };
  return (
    <div className="container text-center">
      <div className="row sh-row">
        <div className="col-sm-5">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={itemName}
            onChange={() => handleTodoName(event)}
          />
        </div>
        <div className="col-sm-4">
          <input
            type="date"
            value={dueDate}
            onChange={() => handleDueDate(event)}
          />
        </div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-success  sh-button"
            onClick={handleNewItem}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
