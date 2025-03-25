const INITIAL_VALUES = {
  counter: 0,
};

const redux = require("redux");

const reducer = (store = INITIAL_VALUES, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newStore = { counter: store.counter + action.payload.number };
  }
  return newStore;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" }); //1
store.dispatch({ type: "DECREMENT" }); //0
store.dispatch({ type: "INCREMENT" }); //1
store.dispatch({ type: "ADDITION", payload: { number: 7 } }); //8
store.dispatch({ type: "DECREMENT" }); //7
