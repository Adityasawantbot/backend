require('dotenv').config() 
const express = require('express')
const app = express()
const port = 3000
app.get('/insta',(req,res)=>{
  res.send("Welcome to insta");
})
app.get('/', (req, res) => {
  res.send('Hello Aditya')
})
app.get('/twitter',(req,res)=>{
    res.send('Welcome');
})
app.get('/login',(req,res)=>{
    res.send('Login successfull');
})
app.get('/youtube',(req,res)=>{
    res.send('<h1>youtube</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
