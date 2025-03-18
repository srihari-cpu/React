import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext([
  {
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {},
  },
]);

const todoItemReducer = (currItems, action) => {
  let newItems = currItems;
  if (action.type === "NEW_ITEM") {
    newItems = [
      ...currItems,
      { name: action.payload.itemName, dueDate: action.payload.dueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newItems = currItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newItems;
};

const TodoItemsContextProvider = ({ children }) => {
  let [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, dueDate) => {
    const newItem = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        dueDate,
      },
    };
    dispatchTodoItems(newItem);
  };

  const deleteItem = (itemName) => {
    // const newItem = todoItems.filter((item) => item.name !== itemName);
    const deleteItem = {
      type: "DELETE_ITEM",
      payload: {
        itemName: itemName,
      },
    };
    dispatchTodoItems(deleteItem);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
