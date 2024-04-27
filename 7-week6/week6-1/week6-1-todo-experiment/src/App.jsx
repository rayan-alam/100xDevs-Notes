// here we're exploring how keys work in react
// whenever a list is being defined, each of the list element need to have a key attached to them
// it makes it easier for react to understand which item belong to which list
// if not then react can easily get confused, when re-rendering happens

import { useState } from 'react'

let counter = 4; // global variable for id incrementation

function App() {
  const[todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "pull day today"
    },
    {
      id: 2,
      title: "do dsa",
      description: "linked list day"
    },
    {
      id: 3,
      title: "do webdev",
      description: "react hooks"
    }
  ])

  function addTodo(){
    setTodos([...todos, {
      id: counter++,
      title: "hellow wordl",
      description: Math.random()
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add New Todo</button>
      {todos.map(function(todo){
        return <Todo key={todo.id} title={todo.title} description={todo.description}/>
      })}
    </div>
  )
}

function Todo({title, description}){
  return(<>
    <h3>
      {title}
    </h3>
    <h5>
      {description}
    </h5>
  </>)
}

export default App
