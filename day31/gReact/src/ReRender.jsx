import { useState } from "react";

function ReRender() {
  const [count, setCount] = useState(0);
  console.log("re-execute");
  console.log(`count: ${count}`);

  function increase() {
    // setCount((pre) => pre + 1);
    // setCount((pre) => pre + 1);
    // setCount((pre) => pre + 1);
    // setCount((pre) => pre + 1);
    setCount(24);
    console.log(`new count: ${count}`);
  }

  return (
    <>
      <p>count: {count}</p>
      <button onClick={increase}>add</button>
    </>
  );
}

export default ReRender;
