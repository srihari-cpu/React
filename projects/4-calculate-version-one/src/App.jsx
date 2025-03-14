import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";
function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default App;
