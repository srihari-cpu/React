import { useSelector } from "react-redux";

const DisplayContainer = () => {
  const { counterVal } = useSelector((state) => state.counter);
  return <p className="lead mb-4">Counter current value is : {counterVal}</p>;
};
export default DisplayContainer;
