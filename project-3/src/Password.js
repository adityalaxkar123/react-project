import React from 'react'
import { useState , useCallback, useEffect ,useRef} from 'react';
function Password() {
  
  const [length,setlength] = useState(8);
  const [password,setpassword] = useState("");
  const [numberAllow,setnumberAllow] = useState(false);
  const [charAllow,setcharAllow] = useState(false);

  const passwordRef = useRef(null);//useRef is a React Hook that lets you reference a value that’s not needed for rendering.

  const passwordGenerator = useCallback(()=>{//useCallback is a React Hook that lets you cache a function definition between re-renders.
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  
    if (numberAllow) str+='0123456789';
    if (charAllow) str+='~!@#$%^&*()_-+=<,>.?/:;{[}]'
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);

  },[length,setpassword,numberAllow,charAllow])


useEffect(()=>{//useEffect is a React Hook that lets you synchronize a component with an external system.
  passwordGenerator();
},[length,numberAllow,charAllow,passwordGenerator]);
  
const copyPass = useCallback(
  () => {
    passwordRef.current?.select();//effect of select text
    //passwordRef.current?.setSelectionRange(1,5);//effect of ranged select
    window.navigator.clipboard.writeText(password);//to copy text
  },
  [password],
)




  return (
    <div className='w-full h-52  max-w-2xl mx-auto my-16 flex flex-col  flex-wrap items-center shadow-md rounded-lg px-4 text-orange-500 bg-gray-700'>
    <h1 className='text-white  text-wrap text-3xl mt-2'>Password Generator</h1>
      <div className='flex rounded-lg overflow-hidden flex-row flex-wrap w-full  justify-center'>
      <input type="text" ref={passwordRef} value={password} className='outline-0  border-0 w-3/4 py-1 px-3 text-2xl rounded-lg mt-2' placeholder=' password' readOnly/>
      <button onClick={copyPass} className='outline-0 border-0 bg-blue-700 text-wrap rounded-lg text-white text-2xl px-3 py-1 mt-2 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2 flex-wrap items-center'>
        <div className='flex gap-x-1 flex-wrap items-center'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}} />
          <label htmlFor="length" className='text-2xl'> Length: {length}</label>
        </div>
        <div className="flex gap-x-1 flex-wrap items-center">
          <input type="checkbox" className='outine-0 border-0 cursor-pointer ml-2' defaultChecked={numberAllow} id='numberInput' onChange={()=>setnumberAllow((prev) =>!prev)}/>
          <label htmlFor="number" className='text-2xl'>Numbers</label>
        </div>
        <div className="flex gap-x-1 flex-wrap items-center">
          <input type="checkbox" className='outine-0  border-0 cursor-pointer ml-2' defaultChecked={charAllow} id='characterInput' onChange={()=>setcharAllow((prev) =>!prev)}/>
          <label htmlFor="char" className='text-2xl'>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default Password
