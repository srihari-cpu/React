import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  let [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, dueDate) => {
    // const newItems = [...todoItems, { name: itemName, dueDate }];
    setTodoItems((currentValues) => [
      ...currentValues,
      { name: itemName, dueDate },
    ]);
  };

  const deleteItem = (itemName) => {
    const newItem = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newItem);
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems,
          addNewItem,
          deleteItem,
        }}
      >
        <div className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </div>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
