import {useState,useRef} from 'react'
export default function Player() {
  const playNane=useRef()
  const [enterPlayerName,setEnterPlayerName]=useState('')
  
 
  const handleClick=()=>{
    setEnterPlayerName(playNane.current.value)
    playNane.current.value=''
  }
  return (
    <section id="player">
      <h2>Welcome {enterPlayerName??'unknown'}</h2>
      <p>
        <input ref={playNane} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
