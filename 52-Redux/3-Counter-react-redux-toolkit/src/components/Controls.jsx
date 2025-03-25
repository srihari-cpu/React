import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleReset = () => {
    dispatch(counterActions.reset());
  };

  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  };

  const handlAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handlSubtract = () => {
    dispatch(counterActions.subtract(inputElement.current.value));
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
          type="number"
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
