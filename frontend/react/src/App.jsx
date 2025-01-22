import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  // ********************************************

  // const random = useState[0];
  // const count2 = random[0];
  // const setCount2 = random[1];

  // These three lines of code do the exact same thing as the first line of code.

  // *********************************************

  const clicked = () => {
    setCount(count + 1);
  }

  return (
    <>
      <button id="btn" onClick={clicked}>Count: {count}</button>
    </>
  );
}

export default App;