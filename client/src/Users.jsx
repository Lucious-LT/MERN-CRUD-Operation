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

    const handleDelete = (id) => {
      axios.delete('http://localhost:5001/deleteUser/'+id)
      .then (result => {console.log(result)
      // setUsers(users.filter(user => user._id !== id))
      window.location.reload()
      })
      .catch(err => console.log(err))
    }

  return (
    <div className="flex flex-row flex-wrap justify-center  px-9 m-5  px mb-6 rounded-lg">
  <div className="bg-gray-100 border border-gray-300  justify-center w-2/2 rounded-lg p-1 mb-4">
    <Link to="/create" className="rounded-md  ml-8 mt-5  bg-green-500 text-white mb-5 py-1 px-2">Create+</Link>
    <table className="table-auto w-2/2 m-2 h-fit">
     <thead className="rounded   justify-center text-white px-4 py-2">
  <tr className="rounded-lg mr-1 text-black px-1 py-7">
    <th className="px-4 py-2">Name</th>
    <th className="px-4 py-2">Email</th>
    <th className="px-1 py-5">Age</th>
    <th className="px-4 py-2">Actions</th>
  </tr>
</thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4  py-2">{user.email}</td>
              <td className="px-4 py-2">{user.age}</td>
              <td>
                <Link to={`/update/${user._id}`} className="bg-green-500 text-white  ml-2 px-4 py-1 rounded mt-4">Update</Link>
                <button
                  to="/delete"
                  onClick={(e) => handleDelete(user._id)}
                  className="bg-red-500 text-white px-4 py-1 mr-2 m-3 rounded-lg mt-4"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
</div>
)};

export default Users;