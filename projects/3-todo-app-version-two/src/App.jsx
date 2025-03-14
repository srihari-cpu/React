import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";

function App() {
  let todoItems = [
    { name: "Buy Milk", dueDate: "12/03/2004" },
    { name: "GO to Collegee", dueDate: "12/03/2004" },
    { name: "Buy a car", dueDate: "25/07/2006" },
  ];

  return (
    <>
      <div className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </div>
    </>
  );
}

export default App;
