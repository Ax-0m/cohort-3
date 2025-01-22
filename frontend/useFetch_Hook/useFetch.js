// import { useEffect } from "react";
// import { useState } from "react";

// export default function usePost() {
//   const [post, setPost] = useState({});

//   async function getPosts() {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     // setPost(await response.json());
//     const json = await response.json();
//     setPost(json);
//   }

//   useEffect(() => {
//     getPosts();
//   }, []);

//   return post.title;
// }

import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  async function getData() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [url]);

  return {
    data,
    loading,
  };
}

export default useFetch;
