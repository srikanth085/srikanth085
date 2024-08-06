import React, { useEffect,useState } from 'react'

function Demo1() {
    const[count,setCount]=useState(0)


      

  return (
  <>
   
    <h1>
        {count}
    </h1>
    <button onClick={()=>{setCount(count + 1)}} > +</button>
    <button onClick={()=>{setCount(count-1)}}>-</button>

    </>
    
  )
}

export default Demo1