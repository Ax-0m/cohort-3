import { useState } from "react";

function App() {
  return (
    <>
      <ToggleMessage></ToggleMessage>
    </>
  );
}

const ToggleMessage = () => {
  const [toggle, setToggle] = useState(true); // Re-rendering only takes palce when a state variable changes.

  const toggleFunc = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <button onClick={toggleFunc}>Conditonal Rendering</button>
      {toggle && <p>This message is conditionally rendered</p>}
    </div>
  )
}

export default App;