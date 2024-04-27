import { useState } from 'react'

function App() {
  return (
    <div>
      <CardWrapper>Hello from card wrapper component-1</CardWrapper>
      <CardWrapper>Hello from card wrapper component-234</CardWrapper>
      {/* //component inside a wrapper */}
      <CardWrapper>
        <TextCompnent></TextCompnent>
      </CardWrapper>
      {/* //wrapper inside a wrapper */}
      <CardWrapper>
        <CardWrapper>
          <TextCompnent></TextCompnent>
        </CardWrapper>
      </CardWrapper>
    </div>
  )
}

function CardWrapper({children}){
  // create a div which has a border, and inside the div renders the prop
  console.log(children);
  return(<div
  style={{border: "2px solid black",padding: 20}}>
    {children}
  </div>)
}

function TextCompnent(){
  return(<div>
    Hellow form text component
  </div>)
}
export default App
