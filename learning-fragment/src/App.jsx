import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";
import "./App.css";
import Container from "../src/Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newFoods = [...foodItems, newFoodItem];
      setFoodItems(newFoods);
      event.target.value = "";
    }
  };

  return (
    // <></> we can use this also
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleOnKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <p>The above are the Healthy food to eat.</p>
      </Container> */}
    </>
  );
}

export default App;
