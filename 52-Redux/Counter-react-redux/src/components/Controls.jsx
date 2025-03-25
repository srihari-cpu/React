import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  const handlAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        number: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handlSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        number: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button type="button" className="btn btn-info" onClick={handleReset}>
          0
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          ref={inputElement}
          placeholder="Enter number"
          className="number-input"
        />
        <button type="button" className="btn btn-dark" onClick={handlAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handlSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};
export default Controls;
