import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useTitle from "./useCounter";
import useCounter from "./useCounter";

export default function SecondComponenet() {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <>
      <h1>Counter == {count}</h1>
      <div>
        <button onClick={increment}>Increment + 1</button>
        <button onClick={decrement}>Decrement - 1</button>
        <button onClick={reset}>Reset - 0</button>
      </div>
    </>
  );
}
