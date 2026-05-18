import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  // const handleClick = () => {
  //   console.log("Button clicked!");
  // };

  return (
    <div>
      <h3>Parent</h3>

      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child onSave={handleClick} />
    </div>
  );
};

export default Parent;
