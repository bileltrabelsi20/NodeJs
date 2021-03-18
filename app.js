const {tab1} = require ('./exercice');
const express = require('express') ;
const app = express() ;
var bodyParser = require('body-parser')  

const mongoose = require('mongoose');
const Blog = require ('./models/todo');
const mongoUrl ="mongodb+srv://bilel:trabelsi@cluster0.dn70h.mongodb.net/bilelDataBase?retryWrites=true&w=majority";
const User = require ('./models/user');

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

mongoose.connect( mongoUrl, {

  useNewUrlParser: true,
  useUnifiedTopology: true

}).then(result => app.listen(3000 , () =>{

  console.log('server is lisning in http://localhost:3000');

})).catch(error => console.log(error));


//////////test server ////////
app.get('/', function (req, res) {

  res.send('xzzxx')

})

////////post///////ajout blog

app.post('/add' , (req,res) => {

  const blog = new Blog({

    title : "xxxx" ,
    body : "yyyyy"

  });
// req.body
  blog.save()
  .then (result => {res.send(result)})
  .catch ( error => console.log(error))
})

//get all blog/////
////////////////////////////

app.get( '/findAll' , (req,res) => {

  Blog.find()
  .then(result => {res.send(result)})
  .catch( err => console.log(err) )

} )


app.get ('/findById' , (req,res) => {

  Blog.findById("6050d17332b792284c65d61d")
  .then(result => {res.send(result)})
  .catch (err => console.log(err))

})


app.get ('/findOne' , (req,res) => {

  Blog.findOne({ title: 'xxxx' })
  .then(result => {res.send(result)})
  .catch (err => console.log(err))

})

app.get('/findOneById',(req,res)=>{
  Blog.findOne({ _id: '6050ca1e9078061f085eb899' })
  .then(result => {res.send(result)})
  .catch (err => console.log(err))
})

app.get('/findOneById/:id',(req,res)=>{
  id = req.params.id
  Blog.findById(id)
  .then(result => {res.send(result)})
  .catch (err => console.log(err))
})



app.delete ('/delete/:id' , (req,res)=>{
_id = req.params.id
Blog.findByIdAndDelete(_id)
.then ( ()=> {res.send('deleted')})
.catch (err => console.log(err))

})

app.put('/edit' , (req,res)=> {
    Blog.findByIdAndUpdate({_id : "6050d3dcfdfb061bd8ae1cd7"},{title:"new title"} ,{new:true})
    .then(result => {res.send(result)})
    .catch (err => console.log(err))
})




////////////////////// ///////////////////////////   USER_SCHEMA ///////////////////////////////////////////////////////////


///////////////////// add new user  //////////////////////////

app.post('/addNewUser', jsonParser, (req,res) => {

    User.create(req.body)
    .then (result => {res.json(result)})
    .catch ( error => console.log(error))
  })

 
 ////////////// find user par son id ////////////////////////

 
  app.get('/findUserById',(req,res)=>{
    User.findOne({ _id: '60521e035de86e06ccbbe898' })
    .then(result => {res.send(result)})
    .catch (err => console.log(err))
  })


//////////////// find by id and delete that id ///////////////


  app.delete('/deleteUserById/:id',(req,res)=> {
    _id=req.params.id
    User.findByIdAndDelete(_id)
    .then (()=>{res.send('deleted , verifier data base')})
    .catch (err => console.log("err"))
  })

///////////// a chaque fois je clique je delite /////////////

app.delete('/deleteUser/:id',(req,res)=> {
  _id=req.params.id
  User.findOneAndDelete(_id)
  .then (()=>{res.send('deleted , verifier data base')})
  .catch (err => console.log("err"))
})

/////////////////// find all users /////////////////////////

app.get('/findAllUsers',(req,res)=>{
  User.find()
  .then(result => {res.send(result)})
  .catch (err => console.log(err))
})


///////////////////// find by id ////////////////////////

app.get ('/findUserById/:id' , (req,res) => {
  id = req.params.id
  User.findById(id)
  .then(result => {res.send(result)})
  .catch (err => console.log(err))

})




app.get ('/findOneUser' , (req,res) => {

  User.findOne({ email: 'aaaaaaaaaaaaa@gmail.com' })
  .then(result => {res.send(result)})
  .catch (err => console.log(err))

})


///////////////UPDATE USER /////////////////////////////

app.put('/editUser' , (req,res)=> {
  User.findByIdAndUpdate({_id : "6053641c3fe00615b8be8277"},{password:"5555"} ,{new:true})
  .then(result => {res.send(result)})
  .catch (err => console.log(err))
})



