// The whole point is that props are meant to be passed from the parent to the children element
// You can pass props up the chain but it is very tricky and it is a very bad practice
// You'll have to use some callback bullshit and all

import { createContext, useContext, useState } from "react";

// import { useState } from "react";

// function App() {
//   return (
//     <div>
//       <LightBulb />
//     </div>
//   );
// }

// function LightBulb() {
//   return (
//   <div >
//     <BulbState />
//     <ToggleBulbState />
//   </div>)
// }

// function BulbState() {
//   const [bulbOn, setBulbOn] = useState(true); {/ * we need this setBulbOn variable in the toggleBulbSate function but it is not possible so we'll be creating a new variable in the LightBulb function. LightBulb is the parent of BulbState and ToggleBulbState so we'll create a variable in there and then pass it down */}
//   return <div>
//     {bulbOn ? "bulb is on" : "bulb is off"}
//   </div>
// }

// function ToggleBulbState() {
//   return <div>
//     <button>Toggle Bulb State</button>
//   </div>
// }

// export default App;


// import { useEffect, useState } from "react";

// function App() {
//   return (
//     <div>
//       <LightBulb />
//     </div>
//   );
// }

// function LightBulb() {

//   const [bulbOn, setBulbOn] = useState(true);

//   return (
//     <div >
//       <BulbState bulbOn={bulbOn}/>
//       <ToggleBulbState setBulbOn={setBulbOn} />
//     </div>)
// }

// function BulbState({bulbOn}) {
//   return <div>
//     {bulbOn ? "bulb is on" : "bulb is off"}
//   </div>
// }

// function ToggleBulbState({setBulbOn}) {

//   function toggle() {
//     setBulbOn(c => !c);
//   }

//   return <div>
//     <button onClick={toggle}>Toggle Bulb State</button>
//   </div>
// }

// export default App;

const Bulbcontext = createContext();

function App() {

  const [bulbOn, setBulbOn] = useState(true);

  return <div>
    <Bulbcontext.Provider value={{ bulbOn, setBulbOn }}>
      <Light />
    </Bulbcontext.Provider>
  </div>
}

function Light() {
  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb() {
  const { bulbOn } = useContext(Bulbcontext);

  return <div>
    {bulbOn ? "The bulb is on" : "The bulb is off"}
  </div>
}

function LightSwitch() {
  const { bulbOn, setBulbOn } = useContext(Bulbcontext);

  const toggle = () => {
    setBulbOn(!bulbOn);
  }

  return <div>
    <button onClick={toggle}>Toggle</button>
  </div>
}

export default App;