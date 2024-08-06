import React,{useState} from 'react'

function Demo2() {
    const[count,setCount]=useState(0)

  return (
    <>
    <div>{count}</div>
    <button onMouseEnter={()=>{setCount(count + 1)}} > +</button>
    <button onMouseEnter={()=>{setCount(count-1)}}>-</button>
    </>
    )
}

export default Demo2