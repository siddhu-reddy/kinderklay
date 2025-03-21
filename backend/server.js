const express = require('express')
const mysql=require('mysql')
const cors = require('cors')

const app=express()
app.use(cors())
const db = mysql.createPool({
    connectionLimit: 10, // Limit the number of connections
    host: "srv772.hstgr.io",
    user: "u671397953_admin",
    password: "HTuzen321",
    database: "u671397953_KinderKlay"
});

db.on('error', (err) => {
    console.error('Database error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.log('Reconnecting...');
        db.getConnection();
    }
});


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
