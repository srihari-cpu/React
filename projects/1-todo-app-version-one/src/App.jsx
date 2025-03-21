import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";

function App() {
  return (
    <>
      <div className="todo-container">
        <AppName />
        <AddTodo />
        <div className="item-container">
          <TodoItem1 />
          <TodoItem2 />
        </div>
      </div>
    </>
  );
}

export default App;
