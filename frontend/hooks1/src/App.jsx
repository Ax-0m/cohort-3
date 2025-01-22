// React calls the components whenever the state variable changes.
// Basically, whenever the state variable (count in this case) changes the react file re-renders.
// Cleanup in useEffect is a way to clean up side effects like timers, subscriptions, or event listeners to prevent memory leaks.
// When the clock in the counterVisible is not cleared it will lead to memory leak.

import {useEffect, useState} from 'react'

function App() {

  // Conditional Rendering

  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    const clock = setInterval(() => {
      setCounterVisible(!counterVisible);
    }, 5000);

    return function() {
      clearInterval(clock);
    }


  }, [counterVisible])

  return(
    <>
      hi
      {counterVisible && <Counter></Counter>}
      hello
    </>
  )
}


function Counter() {
    const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

// setInterval(() => {
//   setCount(count + 1)   -----   The app starts going crazy because of this. To fix this issue we have to hook into the lifecycle events of react.
// }, 1000);               -----   this happens because whenever the count variable changes it cause a re-render, this fucks up the program

// To fix this we use a hook called useEffect -- it takes 2 argumnets, a functions and a dependency array

useEffect(() => {
  let clock = setInterval(() => {
    setCount(c => c + 1)
    console.log("Helloo There");
  }, 1000);

  return function() {
    clearInterval(clock)
    console.log("Cleanup");
  }
}, []);


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App;