import './App.css'
import { useState } from 'react';

// function App() {
//     const [count, setCount] = useState(0);
    
//   return(
//     <div>
//         <CustomButtom count={count} setCount={setCount}></CustomButtom>
//         <CustomButtom count={count - 1} setCount={setCount}></CustomButtom>
//         <CustomButtom count={count + 1} setCount={setCount}></CustomButtom>
//         <CustomButtom count={count * 100} setCount={setCount}></CustomButtom>
//     </div>
//   )
// }

// function CustomButtom(props){
//   function onClickHandler() {
//     props.setCount(props.count + 1);
//   }

//   return (
//     <button onClick={onClickHandler}>Counter {props.count}</button>
//   )
// }

export default App

// todo application
// todo state
{
  todos: [{title: "todo1", description: "First todo", completed: false}]
}
function App(){
  const [todos, setTodos] = useState([{
    title: "GO to gym",
    description: "Go to gym from 7 to 9",
    completed: false
  }, {  
    title: "Study DSA",
    description: "Study DSA from 9 to 10",
    completed: true
  }, {
    title: "Third task todo",
    description: "Thirdt todo task",
    completed: true 
  }]);

  function addTodo(){
    // [1,2]
    // [...todos, 3] => [1,2,3]
    setTodos([...todos, {
      title: "new Todo",
      description: "desc new todos"
    }])
  }
  

  return(
    <div>
      <button onClick={addTodo}>Add new todo</button>
      {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
      <Todo title={todos[1].title} description={todos[1].description}></Todo>  */}
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })} 
    </div>  
  )
}


function Todo(props){
  return <div>
    <h3>{props.title}</h3>
    <h4>{props.description}</h4>
  </div>
}