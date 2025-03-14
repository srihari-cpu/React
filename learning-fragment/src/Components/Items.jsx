import styles from "./Item.module.css";
const Items = ({ item, handleBuyButtonClick }) => {
  return (
    <>
      <li className={`${styles["sh-item"]} list-group-item`} key={item}>
        <span className={styles["sh-span"]}>{item}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleBuyButtonClick}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Items;
