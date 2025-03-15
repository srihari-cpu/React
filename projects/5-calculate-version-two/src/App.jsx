import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";
function App() {
  let [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalValue("");
    } else if (buttonName === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      let newDisplayValue = calValue + buttonName;
      setCalValue(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calValue} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
