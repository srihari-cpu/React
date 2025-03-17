import { useState, useRef, use } from "react";
import style from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const itemNameElement = useRef();
  const dueDateElement = useRef();

  const handleNewItem = (event) => {
    const itemName = itemNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    if (itemName !== "" && dueDate !== "") {
      event.preventDefault();
      onNewItem(itemName, dueDate);
      itemNameElement.current.value = "";
      dueDateElement.current.value = "";
    }
  };
  return (
    <div className="container text-center">
      <form onSubmit={handleNewItem} className="row sh-row">
        <div className="col-sm-5">
          <input
            type="text"
            ref={itemNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-sm-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-success  sh-button">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
