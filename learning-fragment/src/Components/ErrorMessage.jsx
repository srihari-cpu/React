const ErrorMessage = ({ items }) => {
  return <>{items.length == 0 && <h1>I am Hungry</h1>}</>;
};
export default ErrorMessage;
