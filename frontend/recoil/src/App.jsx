// recoil minimizes unnecessary renders by only re-rendering components that depend on changed atoms 
// writing the code without recoil which is without using usestate

import { memo, useEffect, useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, isEven } from "./store/atoms/counter";

// import { useState } from "react";

// function App() {
//   return (
//     <>
//     <Counter />
//     </>
//   );
// }

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return <div>
//     {count}
//     <Increase setCount={setCount} />
//     <Decrease setCount={setCount} />
//   </div>
// } 

// const Increase = ({setCount}) => {

//   function increase() {
//     setCount(c => c + 1)
//   }
//   return <div>
//     <button onClick={increase}>Increase</button>
//   </div>
// }

// const Decrease = ({setCount}) => {

//   function decrease() {
//     setCount(c => c - 1);
//   }
//   return <div>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// }

// export default App;

// using recoil now --- optimizing the app even more

// import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil';
// import { counterAtom } from './store/atoms/counter';

// function App() {
//   return (
//     <RecoilRoot>
//       <Counter />
//     </RecoilRoot>
//   );
// }

// function Counter() {
//   return <>
//     <CurrentCount />
//     <Increase />
//     <Decrease />
//   </>
// }

// function CurrentCount() {
//   const counter = useRecoilValue(counterAtom);

//   return <>
//     {counter}
//   </>
// }

// function Increase() {
//   const setCount = useSetRecoilState(counterAtom);

//   function increase() {
//     setCount(c => c + 1);
//   }

//   return <div>
//     <button onClick={increase}>increase</button>
//   </div>
// }

// function Decrease() {
//   const setCount = useSetRecoilState(counterAtom);

//   function decrease() {
//     setCount(c => c - 1);
//   }

//   return <div>
//     <button onClick={decrease}>decrease</button>
//   </div>
// }

// export default App;

// using memo -- react api

// function App() {
//   return <>
//     <Counter />
//   </>
// }

// function Counter() {
//   const [count, setCount] = useState(0);

// useEffect(() => {
//   setInterval(() => {
//     setCount(c => c + 1);
//   }, 3000);
// }, [])

//   return <>
//     <CurrentCount count={count} /><br />
//     <Increase /><br />
//     <Decrease /><br />
//   </>
// }

// const CurrentCount = memo(({count}) => {
//   return <>
//     {count}
//   </>
// })

// const Increase = memo(() => {
//   function increase() {

//   }
//   return <>
//     <button>increase</button>
//   </>
// })

// const Decrease = memo(() => {
//   function decrease() {

//   }
//   return <>
//     <button>decrease</button>
//   </>
// })

// export default App;

// using the selector family in recoil

function App() {
  return <div>
    <RecoilRoot>
      <Counter /><br />
      <Increase />
      <Decrease />
      <IsEven />
    </RecoilRoot>
  </div>;
}

function Counter() {

  const count = useRecoilValue(counterAtom);

  return <div>
    {count}
  </div>
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount(c => c + 2);
  }
  return <div><button onClick={increase}>increase</button></div>
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  function decrease() {
    setCount(c => c - 1);
  }
  return <div>
    <button onClick={decrease}>decrease</button><br />
  </div>
}

function IsEven() {
  const even = useRecoilValue(isEven);

  return <div>
    {even ? "even" : "odd"}
  </div>
}

export default App;