import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate()

    const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/register', {name, email, password})
    .then(result => {console.log(result)})
    window.alert('User registered successfully')
    
    Navigate('/login')
    .catch(err => console.log(err))
    }



  return (
    <div className="flex justify-center items-center h-screen bg-slate-500">
      <div className="w-2/2 h-fit bg-gray-200 border p-5 m-0 rounded-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="flex justify-center mt-2">Register</h2>
          <div className="mb-2">
            <label htmlFor=''>Name</label>
            <input
              type="text"
              placeholder='Enter Name'
              className="mb-2 p-2 w-full border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
          <button className="bg-blue-500 items-center text-white px-8 py-2 rounded-lg mt-4 mx-auto block">Register</button>
          <p>Aready have an account</p>
          <Link to="/login" className=" text-red-400  ">Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;