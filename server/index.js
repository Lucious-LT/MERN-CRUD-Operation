const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./model/Users');
const User = require('./model/User');
// const { json } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const app = express();


app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());






// Create a user
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    return re.json('User not found')
  } else {  
    jwt.verify(token, 'SECRETKEY', (err, decoded) => {
      if (err) {
        return res.json('Invalid token')
      }else {
        if (decoded.role === 'admin') {
          next();
        }
        else {
          return res.json("not admin")
        }
      }
    }
    )
  }
}

app.get ('CreateUser', verifyUser, (req, res) => { 
  res.json("Success")
})




// Signup
app.post('/register', (req, res) => {
  const {name, email, password} = req.body;
  bcrypt.hash(password, 10)
  .then ((hash) => {
  User.create({name, email, password: hash})
  .then(user => res.json({status: 'Success', user}))
  .catch(err => res.json(err))
})
})

// Login
app.post('/login', (req, res) => {
  const {email, password} = req.body;
  User.findOne({email:email})
  .then(user => {
    if (user) {
        bcrypt.compare(password, user.password, (err, response) => {
    
      if (response) {
        const token = jwt.sign({email: user.email, role: user.role},
      'SECRETKEY',{expiresIn: '1d'})
      res.cookie('token', token)
      return res.json({Status: "Login successful", role: user.role})
    }else {
      return res.json('Password incorrect')
    }
  })
} else {
  return res.json('User not found')
}
})

})
 
// get all users

app.get('/',  (req, res)=>{
  UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

//Update
app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id:id}, {
     name:req.body.name,
     email:req.body.email, 
     age:req.body.age})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})


// Create a user
app.post('/createUser',  (req, res) => {
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json (err))
});

// get user by id
app.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

// Delete a user
app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})





// Connect to MongoDB
mongoose.connect("mongodb+srv://crud-challenge:lucious0801a,H@cluster0.asqoaw8.mongodb.net/crud");

app.listen(5001, () => {
    console.log('Server is running on port 5001');
    });