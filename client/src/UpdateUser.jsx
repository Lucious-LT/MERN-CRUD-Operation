import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'

function UpdateUsers() {
  const [name, setName]= useState()
  const [email, setEmail]= useState()
  const [age, setAge]= useState() 
  const navigate =useNavigate()

  useEffect (() =>{
 axios.get('http://localhost:5001/getUser'+id)
 .then(result=> console.log(result))
 .tcatch(err=> console.log(err))

  },[])


  return (
    <div className="flex h-screen justify-center bg-slate-800">
      <div className='w-1/2 h-1/2 bg-slate-100 rounded p-5 mt-20 '>
        <form onSubmit={Submit} >
                <h2>Update User</h2>
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
            className='form-control'/>
            </div>

            <div className="mb-2">
            <label htmlFor=''>Age</label>
            <input type ="text" 
            placeholder='Enter Name'
            className='form-control'/>
             </div>
 
              <button className=' btn-primary'>Update User</button>













           
        </form>
      </div>
    </div>
  )
}

export default UpdateUsers
