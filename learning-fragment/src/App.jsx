import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";
import "./App.css";
import Container from "../src/Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  let [textToShow, setTextToShow] = useState("Food Item Entered By User");

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextToShow(event.target.value);
  };

  return (
    // <></> we can use this also
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput handleOnChange={handleOnChange} />
        <p>{textToShow}</p>
        <FoodItems items={foodItems} />
      </Container>
      <Container>
        <p>The above are the Healthy food to eat.</p>
      </Container>
    </>
  );
}

export default App;
