require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData={hitesh :"Author"};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
      res.send("twitter has been renamed to X");
})

app.get('/login',(req,res)=>{
      res.send("<h1>Please login @ chai aur code</h1>")
})

app.get('/youtube',(req,res)=>{
      res.send("<h2>Chai aur code</h2>")
})

app.get('/github',(req,res)=>{
      res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})