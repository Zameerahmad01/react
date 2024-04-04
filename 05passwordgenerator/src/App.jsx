import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [charAllowed, setChar] = useState(false)
  const [numberAllowed, setNumber] = useState(false)
  const [password, setPassword] = useState("")


  //useRef hook is used
  const passwordRef =useRef(null) 

  const passGenerator  =useCallback(() =>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()"

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)	
      pass += str.charAt(char) 
    }
       
    setPassword(pass)

  }, [length, charAllowed, numberAllowed, setPassword])


  const copyPassword =useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passGenerator()
  }, [length, charAllowed, numberAllowed, passGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-3xl text-center text-white mb-4'>password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='w-full px-4 py-2  outline-none'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPassword}
          className='outline-none px-4 py-0.5 bg-blue-700 text-white'
          >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={8}
            max={30}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='cursor-pointer'
            />
            <label >length: {length}</label>
          </div>
          
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"  
            id="numberInput" 
            defaultChecked={numberAllowed}
            onChange={()=> {
              setNumber((prev) => !prev)
            }}
            />
            <label htmlFor="">number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"  
            id="numberInput" 
            defaultChecked={charAllowed}
            onChange={()=> {
              setChar((prev) => !prev)
            }}
            />
            <label htmlFor="">character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
