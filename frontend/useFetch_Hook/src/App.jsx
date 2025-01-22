// Custom Hooks --- you write a function but the only catch is that it starts with a use
// eg. -- you wanna create a custom hook called reload then you name it useReload

import React, { useState } from "react";
import useFetch from "../useFetch";

function App() {

  const [currentPost, setCurrentPost] = useState(1)
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  return (
    <div>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <>
          {JSON.stringify(data)} <br />
          <button onClick={() => setCurrentPost(1)}>1</button>
          <button onClick={() => setCurrentPost(2)}>2</button>
          <button onClick={() => setCurrentPost(3)}>3</button>
        </>
      )}
    </div>
  );
}

export default App;