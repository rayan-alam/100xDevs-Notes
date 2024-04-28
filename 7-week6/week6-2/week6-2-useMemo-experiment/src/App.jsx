import { useMemo } from 'react';
import { useState } from 'react'

function App() {
  const [inputN, setInput] = useState(0);
  const [counterButton, setCounter] = useState(0);

  //input sum logic
  let sum = 0;
  for(let i=0; i<=inputN; i++){
    sum = sum + i;
  }
  // button counter logic
  function handleClick(){
    setCounter(counterButton + 1);
  }

  return(<div>
    <input type="text" placeholder="enter n value" 
    onChange={(event) => {
      setInput(event.target.value)
    }}/>
    <br />
    <p>Sum from 0 to {inputN} is {sum} </p>
    <br />
    <button onClick={handleClick}>Counter {counterButton}</button>
  </div>)
}

// the problem with the above code is fairly simple.
// when the counter button is clicked again and again, the value on the button changes
// but the value of the input and it's operations remain the same. this leads to more
// expensive operations because the loop has to run again and again.
// to reduce this bt, we apply useMemo hooks.

// first approach to solve this, use of useEffect for the input sum logic. so only when
// the input changes, the logic renders
// 
// const [inputN, setInput] = useState(0);
// const [finalValue, setFinalValue] = useState(0);
// useEffect(() => {
//   let sum = 0;
//   for(let i=0; i<=inputN;i++){
//     sum = sum + 1
//   }
//   setFinalValue(sum);
// }, [inputN]);
// 
// return(<div>
//    <input type="text" placeholder="enter n value" 
//     onChange={(event) => {
//       setInput(event.target.value)
//     }}/>
//     <br />
//     <p>Sum from 0 to {inputN} is {finalValue} </p>
// </div>)

// second approach, is not having another state variable, but we just apply useMemo hook
// let sum = useMemo(() => {
//   let sum = 0;
//   for(let i=0; i<=inputN; i++){
//     sum = sum+1;
//   }
//   return sum;
// }, [inputN])

// using this way there is no need for another state variable to exist which is cleaner.
// the sum logic only runs when the inputN state variable changes.
// both useEffect and useMemo are similar to each other. usecases may differ
export default App
