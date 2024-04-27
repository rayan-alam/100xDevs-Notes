import React, { useState } from 'react';

// third way of re-rendering on the required component - using react memo
// memo will help to skip re-rendering, of all the components
// only re-rendering the specific component is the main aim
function App(){
  const [title, setTitle] = useState("My name is disco-dancer");
  function updateTitle(){
    setTitle("my name is " + Math.random());
  }

  return( <>
    <button onClick={updateTitle}>Update on Click of button</button>
    <Header title={title}></Header>
    <Header title={title}></Header>
    <Header title="Hellow wordld"></Header>
    </> )
}

const Header = React.memo(
  function Header({title}){
    return(<div>
      {title}
    </div>)
  }
);

export default App

// this is the second way of doing it, so each components do not have to re-render
// function App(){
//   return(
//     <div>
//       <HeaderWithButton></HeaderWithButton>
//       <Header title={"Hellow there mfs"}></Header>
//     </div>
//   )
// }

// function HeaderWithButton(){
//   const [firstTitle, setFirstTitle] = useState("My name is rayan hwllow");

//   function changeTitle(){
//     setFirstTitle("my name is " + Math.random());
//   }

//   return(<>
//     <button onClick={changeTitle}>Click to change the title</button>
//     <Header title={firstTitle}></Header>
//   </>)
// }

// function Header(props){
//   return (
//     <div>
//       {props.title}
//     </div>
//   )
// }

// this leads to rendering of the App:
// function App() {
//   const [title, setTitle] =  useState("rayan1"); //state variable

//   function updateTitle(){
//     setTitle("my name is " + Math.random());
//   }
//   return (
//     <>
//       <button onClick={updateTitle}>Click to change the title</button>
//       <Header title={title}></Header>
//       <Header title="rayan2"></Header>
//     </>
//   )
// }