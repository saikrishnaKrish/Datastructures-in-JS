import { useState } from 'react'
import './App.css'

function MayCompoent() { // Normal Sytax of creating a component
  const [count, setCount] = useState(677) //inital value 
  const obj={name: "sai", Nationality:"Indian"}
  return (
    <>
      <div>Name : {obj.name} and Nationality : {obj.Nationality}</div>
      <div className="card">
        {/* <button onClick={() =>setCount((count) => count + 1) }> */}
        <button onClick={() =>setCount(count + 1) }>
          count is {count}
        </button>
        <p>
            hii  every
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>

   
  )
}

export default MayCompoent
