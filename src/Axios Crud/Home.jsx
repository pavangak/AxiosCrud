import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
const Home = () => {
    const[data,setData]=useState([])
    const navgate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res=>{
            setData(res.data)
            console.log(res.data);
        },[])
    })
    function handleDelete(id){
        axios.delete('http://localhost:3000/users/'+id)
        .then(res=>console.log(res))
        navgate('/')
    }
  return (
    <div className='Home'>
        <main>
            <h1>AXIOS CRUD</h1>
           <Link to={'/creat'}> <button>ADD +</button></Link>
        </main>
        <hr /><hr />
      <table border={'1'} rules='all' width={'100%'}  cellSpacing={'10px'} cellPadding={'10px'} style={{textAlign:'center'}}>
         <thead>
            <tr>
                <td><b>Name</b></td>
                <td><b>Email</b></td>
                <td><b>Aciton</b></td>
            </tr>
         </thead>
         <tbody>
            {
                data.map((user,index)=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                               <Link to={`/read/${user.id}`}> <button>Read</button></Link>
                               <Link to={`/update/${user.id}`}> <button>Update</button></Link>
                                <button onClick={()=>handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
         </tbody>
      </table>
    </div>
  )
}

export default Home
