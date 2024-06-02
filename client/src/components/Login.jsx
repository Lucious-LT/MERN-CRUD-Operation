import React from 'react'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'


function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


    axios.defaults.withCredentials = true;
    const handleLogin = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5001/login', {email, password})
        .then(result => {
          if (result.data.Status === 'Login successful') {
            if (result.data.role === 'admin') {
              window.alert('Admin logged successfully');
              navigate('/create');
            }
            else {
              window.alert('User logged successfully');
              navigate('/');
            }
          }
        })
        .catch(err => console.log(err));
    }
    



  return (
    <div className="flex justify-center items-center h-screen bg-slate-500">
      <div className="w-2/2 h-fit bg-gray-200 border p-5 m-0 rounded-lg">
        <form onSubmit={handleLogin}>
          <h2 className="flex justify-center mt-2">Login⭐️</h2>
          <div className="mb-2">
         </div>
          <div className="mb-2">
            <label htmlFor='email'>Email</label>
            <input
              type="text"
              placeholder='Enter Email'
              className="mb-2 p-2 w-full border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor=''>Password</label>
            <input
              type="password"
              placeholder='Enter Name'
              className="mb-2 p-2 w-full border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        
          <button className="bg-blue-500 items-center text-white px-8 py-2 rounded-lg mt-4 mx-auto block">Login</button>
        </form>
      </div>
    </div>
  );
}


export default Login
