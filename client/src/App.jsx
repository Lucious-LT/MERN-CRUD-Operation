import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './Home';
// import 'bootstarp/dist/css/bootstrap.min.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <div>
       <BrowserRouter>
       <Routes>
          <Route path="/signup" element={<Signup/>} > </Route>
          <Route path="/login" element={<Login/>} > </Route>
          <Route path="/" element={<Users/>} > </Route>
          <Route path="/home" element={<Home/>} > </Route>
          <Route path="/create" element={<CreateUser />} >  </Route>
          <Route path="/update/:id" element={<UpdateUser />} >  </Route>
       </Routes>
       </BrowserRouter>
     </div>
    </>
  )
}

export default App
