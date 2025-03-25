import { useSelector } from "react-redux";

const DisplayContainer = () => {
  const counter = useSelector((state) => state.counter);
  return <p className="lead mb-4">Counter current value is : {counter}</p>;
};
export default DisplayContainer;
