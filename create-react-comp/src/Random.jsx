function Ran() {
  let number = Math.floor(Math.random() * 10);
  return <h1 style={{ background: "orange" }}>Random number is : {number}</h1>;
}
export default Ran;
