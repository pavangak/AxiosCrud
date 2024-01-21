import React, { useState } from 'react'
import './Creat.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Creat = () => {
    const[values,setValues]=useState({name:"",email:""})
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3000/users',values)
        .then(res=>{console.log(res)})
             navigate('/')
    }
  return (
    <div className='App'>
      <form action="" onSubmit={handleSubmit}>
         <h1>Create Data</h1>
         <input value={values.name} onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} type="text" placeholder='Enter your Name' name='name' />
         <br /><br />
         <input value={values.email} onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} type="email" placeholder='Enter your email' name='email' />
         <br /><br />
         <button>Submit</button>
      </form>
    </div>
  )
}

export default Creat
