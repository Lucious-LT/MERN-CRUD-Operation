const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./model/Users');

const app = express();

app.use(cors());
app.use(express.json());

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





// Connect to MongoDB
mongoose.connect("mongodb+srv://crud-challenge:lucious0801a,H@cluster0.asqoaw8.mongodb.net/crud")

app.listen(5001, () => {
    console.log('Server is running on port 5001');
    });