import React, { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Users() {
  const [users, setUsers] = useState([{}]);

    useEffect(()=> {
      axios.get('http://localhost:5001')
      .then (result => {setUsers(result.data)})
      .catch(err => console.log(err))
    }, [])

  return (
    <div className="flex h-screen  justify-center bg-gray-800">
      <div className="w-1/2  rounded p-3 bg-slate-100">
        <Link to="/create" className='rounded h-fit m-1 bg-green-500 text-white px-6 py-2'>Create+</Link>
        <table className="table-auto w-1/2 h-2">
          <thead  className='rounded h-fit m-1 text-white px-6 py-2'>
             <tr className='rounded h-fit m-1 text-black px-6 py-2'>
              
    <th>Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>Actions</th>
  </tr>
            
          </thead>
          <tbody>
            {
            users.map((user) => {
              return  <tr key={user.id}>
                  <td>{user.age}</td>
                  <td>{user.name}</td>
                  <td >{user.email}</td>
                  <td>
                     <Link to={`/update/${user._id} `}className='btn btn-success mt-1 rounded bg-blue-600'>Update</Link>
                     <Link to="/delete" className='btn btn-primary rounded bg-red-600 m-1'>Delete</Link>
                  </td>
                </tr>
              
            })}
          </tbody>
        </table>
      </div>
       </div>
    
  
  
          )}

export default Users;