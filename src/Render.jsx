import React, { useState } from 'react'
import RenderChiled from './RenderChiled'

function Render() {
    const[message, setMessage]=useState({
        fristName:"sikanth",
        lastName:"patel",
        Address:"bhupalpally"
    })
  return (
    <>
    <div className='container'>
    <div>wellcome props concept </div>
    </div>

    <RenderChiled message={message.fristName}/>
    </>
  )
}

export default Render