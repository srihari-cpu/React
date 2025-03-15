import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onClickDelete }) => {
  return (
    <div className={styles["todoContainer"]}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onClickDelete={onClickDelete}
        />
      ))}
    </div>
  );
};
export default TodoItems;
