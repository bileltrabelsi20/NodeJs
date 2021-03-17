const {tab1} = require ('./exercice')
const express = require('express') 
const app = express() 
const mongoose = require('mongoose');
const Blog = require ('./models/todo');
const mongoUrl ="mongodb+srv://bilel:trabelsi@cluster0.dn70h.mongodb.net/bilelDataBase?retryWrites=true&w=majority"



mongoose.connect( mongoUrl, {

  useNewUrlParser: true,
  useUnifiedTopology: true

}).then(result => app.listen(3000 , () =>{

  console.log('server is lisning in http://localhost/3000');

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
  console.log(id);
  Blog.findById(id)
  .then(result => {res.send(result)})
  .catch (err => console.log(err))
})











// app.delete ('/delete' , (req,res)=>{

// Blog.findById()

// })


