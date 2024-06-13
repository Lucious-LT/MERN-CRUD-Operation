import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

function UpdateUsers() {
  const {id} = useParams()
  const [name, setName]= useState()
  const [email, setEmail]= useState()
  const [age, setAge]= useState() 
  const navigate =useNavigate()

  useEffect (() =>{
 axios.get('http://localhost:5001/getUser/'+id)
 .then(result=> {console.log(result)
  setName(result.data.name)
  setEmail(result.data.email)
  setAge(result.data.age)
 })
 .catch(err=> console.log(err))



  },[])

  const Update = (e) => {
    e.preventDefault();
    axios.put('http://localhost:5001/updateUser/'+id, {name, email, age})
    .then(result=> {console.log(result)})
    .catch(err=> console.log(err))
    navigate('/')
  }

    useEffect (() =>{

      axios.get('http://localhost:5001/CreateUser')
        .then(result => {
        if (result.data.role === 'Success') {
          setSuccess("You are authorized to view this page")
        } else {
          navigate('/')
        }
        })
        .catch(err => console.log(err));
    
  },[])


  return (
    <div className="flex h-screen justify-center bg-slate-800">
      <div className='w-1/2 h-1/2 bg-slate-100 rounded p-5 mt-20 '>
        <form onSubmit={Update}>
                <h2>Update User</h2>
          <div className="mb-2">
          <label htmlFor=''>Name</label>
            <input type ="text"
            placeholder='Enter Name'
             className="mb-2 p-2 w-full border border-gray-300 rounded"
             value={name} onChange={(e)=> setName(e.target.value)}
            />
             </div>
            <div className="mb-2">
            <label htmlFor=''>Email</label>
            <input type ="text" 
            placeholder='Enter Name'
            className="mb-2 p-2 w-full border border-gray-300 rounded"
             value={email} onChange={(e)=> setEmail(e.target.value)}
            />
            </div>

            <div className="mb-2">
            <label htmlFor=''>Age</label>
            <input type ="text" 
           
            placeholder='Enter Name'
            className="mb-2 p-2 w-full border border-gray-300 rounded"
            value={age} onChange={(e)=> setAge(e.target.value)}
            />
             </div>
 
              <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">Update User</button>













           
        </form>
      </div>
    </div>
  )
}

export default UpdateUsers
