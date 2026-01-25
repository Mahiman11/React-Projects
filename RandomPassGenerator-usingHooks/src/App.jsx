import { useState , useCallback , useEffect , useRef } from 'react'
import './App.css'

function App() {
  
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] =  useState(false)
  const [password, setPassword] = useState("")

  //password generate kiya , usme nymber or character lagaye , function call kiya , dependencies lagai
  const passwordGenerator = useCallback(() => {
     let pass= "";
     let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

     if(numberAllowed) str += "0123456789"
     if(charAllowed) str += "~@#$%^&*(){}<>/?-"

     for(let i= 1; i<= length; i++){
      let char= Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)

     }
     setPassword(pass);

  }, [numberAllowed, charAllowed, length, setPassword]);
  
  //password laane ke liye method run krdiya h
  useEffect(() => {
    passwordGenerator()
  } , [length, numberAllowed, charAllowed,passwordGenerator])

  //password copy krne k liye sabse phle refrence lo uske baad method bna ke button pr run krdo usse
  const passwordRef = useRef(null)

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="main">PASSWORD GENERATOR

        <div className="input">
          <input type="text" readOnly value={password} ref={passwordRef} placeholder='password' />
          <button onClick={copyPassToClipboard}>copy</button>
        </div>

        <div className="sbkch">

          <input type="range" min={6} max={20} value={length} id='rg' onChange={(e) => {setLength(e.target.value)}}/>
          <label htmlFor="rg">Length: {length}</label>

          <div className="cl">
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='na'
            onChange={() => {setNumberAllowed((prev) => !prev);}} />
            <label htmlFor="na">Numbers</label>
             <input type="checkbox"
            defaultChecked={charAllowed}
            id='ca'
            onChange={() => {setCharAllowed((prev) => !prev);}} />
            <label htmlFor="na">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
