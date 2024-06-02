import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


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
    <div className="flex h-screen justify-center bg-slate-800">
      <div className='w-1/2 h-1/2 bg-slate-100 rounded p-5 mt-20 '>
        <form onSubmit ={Submit}  >
                <h2>Create User</h2>
          <div className="mb-2">
          <label htmlFor=''>Name</label>
            <input type ="text" 
            placeholder='Enter Name'
            className='form-control'
            onChange={(e)=> setName(e.target.value)}
            />
             </div>
            <div className="mb-2">
            <label htmlFor=''>Email</label>
            <input type ="text" 
            placeholder='Enter Name'
            className='form-control'
             onChange={(e)=> setEmail(e.target.value)}
            />
            </div>

            <div className="mb-2">
            <label htmlFor=''>Age</label>
            <input type ="text" 
            placeholder='Enter Name'
            className='form-control'
             onChange={(e)=> setAge(e.target.value)}
            />
             </div>

              <button  className=' bg-green-600 rounded'>Create+</button>













           
        </form>
      </div>
    </div>
  )
}

export default CreateUsers
