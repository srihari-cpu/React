function Hello() {
  let myName = "Srihari";
  let myNumber = 456;
  let fullname = () => {
    return myName + "Yadav";
  };
  return (
    <p>
      Mynumber is {myNumber}. I am your student {fullname()}
    </p>
  );
}
export default Hello;
