const express = require('express')
const mysql=require('mysql')
const cors = require('cors')

const app=express()
app.use(cors())

const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kinderklay"
})
app.get('/',(req,res)=>{
    return res.json("hii");
})

app.get('/users',(req,res)=>{
    const sql="SELECT * FROM admissions";
    db.query(sql,(err,data)=>{
        if(err)  return res.json(err);
        return res.json(data); 
    })
})

app.listen(3000,()=>{
    console.log("listening");
})
