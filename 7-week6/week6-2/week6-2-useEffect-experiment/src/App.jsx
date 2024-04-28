import { useEffect, useState } from 'react'
import axios from "axios";

// now put bunch of buttons on top, with number 1,2,3... which identify the id to hit
// and then render the todo from that list on the screen

function App(){
  const[buttonID, setID] = useState({});

  return(<div>
    <button 
    onClick={() => {
      setID(1);
    }}>1</button>

    <button 
    onClick={() => {
      setID(2);
    }}>2</button>

    <button 
    onClick={() => {
      setID(3);
    }}>3</button>

    <button 
    onClick={() => {
      setID(4);
    }}>4</button>

    <Todo id={buttonID}></Todo>
  </div>)
}

function Todo({ id }) {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    if (id && typeof id !== 'object') {
      axios
        .get(`https://sum-server.100xdevs.com/todo?id=` +id)
        .then((res) => {
          setTodo(res.data.todo);
        })
        .catch((err) => {
          console.error('Error fetching todo:', err);
          setTodo(null);
        });
    }
  }, [id]);

  if (todo === null) {
    return null;
  }

  return (
    <div>
      ID: {id}
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
    </div>
  );
}

// write a component that takes a todo id as an input, and fetches data for that todo id
// from the given endpoint and then renders it
// https://sum-server.100xdevs.com/todo?id=1

// function App(){
//   return(<div>
//     <Todo id={2}></Todo>
//   </div>)
// }

// function Todo({id}){
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
//       .then(function(res){
//         setTodo(res.data.todo);
//       })
//   }, []);

//   return(<div>
//     <h1>{todo.title}</h1>
//     <h3>{todo.description}</h3>
//   </div>)
// }

// UNDERSTANDING axios AND useEffect usage inside a component
// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(function(res){
//         setTodos(res.data.todos);
//       })
//   }, []);

//   return(<div>
//     {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
//   </div>)
// }

// function Todo({title, description}){
//   return(<div>
//     <h2>{title}</h2>
//     <h3>{description}</h3>
//   </div>)
// }

export default App
