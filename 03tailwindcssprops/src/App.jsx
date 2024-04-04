import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

    let myobj ={
      name:"zameer",
      age:25
    }

    let newArr = [1,2,3,4,5]


  return (
    <>
    <h1 className='bg-red-500 text-black p-4 rounded-xl mb-4 cursor-pointer'>tailwind css</h1>

    {/* also object and array can be pass in props */}

    <Card username="zameer" btnText="click me" />
    <Card username="ahmad" btnText="visit me" />
    </>
  )
}

export default App
