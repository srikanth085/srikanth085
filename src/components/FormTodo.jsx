import React, { useState } from 'react'
import Todolist from './Todolist';

function FormTodo() {
   const[nametype,SetNameType] =useState("");
   const[todo,SetTodo]=useState([]);
const todochange=e=>{
    SetNameType(e.target.value)
}
const SubmitEvent = (e) => {
    e.preventDefault();
    SetTodo([...todo, nametype]);
    SetNameType(""); // Clear the input field after adding the todo
    console.log('todo', todo);
  }

  return (
    <>
    <div className='card  w-50  justify-content-center p-2'  >
        <h2>Todolist</h2>
        <div className='card-body'>
            <div className='card-title'>
            <form onSubmit={SubmitEvent}>
                <input type="text"  value={nametype} name='name' placeholder='Enter Names'
                onChange={todochange}/>&nbsp;
              
                <button type='submit 'style={{ background:"blue" ,color: "white"}}>add</button>
                </form>
                {/* {todo && todo.map((item, index) => <p key={index}>{item}</p>)} */}
                <Todolist demo={todo} />
            </div>
        </div>
        
    </div>
    </>
  )
}

export default FormTodo