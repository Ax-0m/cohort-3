// Previous value of the state variable

import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react"

export const usePrev = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current; // first the return is called and then the useEffect updates the value so 
                      // so in the start the ref.current value is undefined and is returned and after the return the useEffect updates it to 0
}

function App() {
  
  const [count, setCount] = useState(0);
  const prevCount = usePrev(count)

  return <>
    The current count is: {count}; <br />
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button> <br />
    The previous count is {prevCount}
  </>
}

export default App;
