const express = require('express')
const app = express();
require('dotenv').config()

app.use(express.json());

app.get("/", (req,res)=>{
    res.send('Hello')
})




app.listen(5000, ()=>{
    
})