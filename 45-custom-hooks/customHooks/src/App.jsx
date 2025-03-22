import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import SecondComponenet from "./SecondComponenet";
import useTitle from "./useCounter";
import useCounter from "./useCounter";

function App() {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <>
      <h1>Counter == {count}</h1>
      <div>
        <button onClick={increment}>Increment + 1</button>
        <button onClick={decrement}>Decrement - 1</button>
        <button onClick={reset}>Reset - 0</button>
      </div>

      <SecondComponenet />
    </>
  );
}

export default App;
