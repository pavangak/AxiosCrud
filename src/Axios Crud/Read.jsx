import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import './Read.css'
import { useNavigate } from "react-router-dom"
const Read = () => {
    const{id} = useParams()
    const[data,setData]=useState([])
    const navigate = useNavigate()
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/users/${id}`);
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [id]);
  
  return (
    <div className="Read">    
       <div className="read">
        <h1 style={{marginTop:'5%'}}>Read Data</h1>
        <p><span style={{color:'red', fontSize:'20px'}}>Name</span> :{data.name}</p>
        <p><span  style={{color:'red', fontSize:'20px'}}>Email</span> :{data.email}</p>
        <button onClick={() => navigate(`/update/${id}`)}>Update</button>
        <button onClick={()=>navigate('/')}>Back</button>
       </div>
    </div>
  )
}

export default Read
