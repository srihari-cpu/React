import styles from "./ButtonsContainer.module.css";
const ButtonContainer = () => {
  const button = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {button.map((btn) => (
        <button className={styles.button}>{btn}</button>
      ))}
    </div>
  );
};
export default ButtonContainer;
