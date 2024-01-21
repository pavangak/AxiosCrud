import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Update.scss'
const Update = () => {
  const { id } = useParams();
  const [values, setValues] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(res => setValues(res.data))
      .catch(error => console.error(error));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(error => console.error(error));
  }

  return (
    <div className='App1'>
      <form action="" onSubmit={handleSubmit}>
        <h1 style={{marginTop:'5%'}}>Update Data</h1>
        <input
          value={values.name}
          onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
          type="text"
          placeholder='Enter your Name'
          name='name'
        />
        <br /><br />
        <input
          value={values.email}
          onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
          type="email"
          placeholder='Enter your email'
          name='email'
        />
        <br /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
