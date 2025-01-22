import { useState } from "react";

function App() {

  const [todos, setTodos] = useState([{
    title: "Go to the gym",
    description: "Hit the gym regularly",
    done: true
  }]);

  const addTodo = () => {
    let newArray = [];
    for (let i = 0; i < todos.length; i++) {
      newArray.push(todos[i]);
    }

    newArray.push({
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      done: true
    })
    setTodos(newArray);
  }

  return (
    <>
      <input id="title" placeholder="title" type="text" />
      <input id="description" placeholder="description" type="text" /><br />
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map((todos) => (<Todo title= {todos.title} description={todos.description} done={todos.done} />))}
    </>
  );
}

const Todo = (props) =>{
  return(
    <div>
      <h2>{props.title}</h2>
      <h2>{props.description}</h2>
      <h2>{props.done ? "Task is done" : "Task is not done"}</h2>
    </div>
  )
}

export default App;