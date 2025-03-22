import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    console.log("interval has setUp");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("interval was cleared");
      clearInterval(intervalId);
    };
  }, []);
  return (
    <p className="lead">
      This is the current time : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
