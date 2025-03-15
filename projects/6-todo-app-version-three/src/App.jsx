import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  let initialTodoItems = [
    { name: "Buy Milk", dueDate: "12/03/2004" },
    { name: "GO to Collegee", dueDate: "12/03/2004" },
    { name: "Buy a car", dueDate: "25/07/2006" },
  ];

  let [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, dueDate) => {
    const newItem = [...todoItems, { name: itemName, dueDate }];
    setTodoItems(newItem);
  };

  const handleDeletitem = (itemName) => {
    const newItem = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newItem);
  };

  return (
    <>
      <div className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} onClickDelete={handleDeletitem} />
      </div>
    </>
  );
}

export default App;
