import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)

  const Addvalue = () => {
    // counter = counter + 1;
    if (counter < 20){
    setCount(counter + 1);

    // setCount(prevCounter => prevCounter + 1);
    // setCount(prevCounter => prevCounter + 1);
    // setCount(prevCounter => prevCounter + 1);
    // setCount(prevCounter => prevCounter + 1);

    }
  }

  const Removevalue = () => {
    // counter = counter - 1;
    if (counter > 0){
      setCount(counter - 1);
    }
  }

  return (
    <>
     <h1>code with zameer</h1>
     <h2>counter value {counter}</h2>

     <button 
     onClick={Addvalue}
     >Add value </button>

      <br />

     <button
     onClick={Removevalue}
     >
      Remove value 
     </button>
    </>
  )
}

export default App
