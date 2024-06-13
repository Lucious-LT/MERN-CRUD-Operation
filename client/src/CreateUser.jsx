import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Navigate, useNavigate} from 'react-router-dom'


function CreateUsers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
 
  const navigate =useNavigate()

  const Submit= (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/createUser', {name, age, email})
    .then (result=>{console.log(result)})
    .catch(err => console.log(err))
    navigate('/')
  }




  return (
     <div className="flex justify-center mt-9">
      <div className="w-2/2 h-fit bg-gray-200 border p-5 m-0 rounded-lg">
        <form onSubmit ={Submit}  >
                <h2 className="flex justify-center mt-2">Create User</h2>
          <div className="mb-2">
          <label htmlFor=''>Name</label>
            <input type ="text" 
            placeholder='Enter Name'
             className="mb-2 p-2 w-full border border-gray-300 rounded"
            onChange={(e)=> setName(e.target.value)}
            />
             </div>
            <div className="mb-2">
            <label htmlFor=''>Email</label>
            <input type ="text" 
            placeholder='Enter Name'
             className="mb-2 p-2 w-full border border-gray-300 rounded"
             onChange={(e)=> setEmail(e.target.value)}
            />
            </div>

            <div className="mb-2">
            <label htmlFor=''>Age</label>
            <input type ="text" 
            placeholder='Enter Name'
             className="mb-2 p-2 w-full border border-gray-300 rounded"
             onChange={(e)=> setAge(e.target.value)}
            />
             </div>

              <button  className="bg-blue-500 justify-center text-white px-4 py-2 rounded mt-4">Create+</button>













           
        </form>
      </div>
    </div>
  )
}

export default CreateUsers
