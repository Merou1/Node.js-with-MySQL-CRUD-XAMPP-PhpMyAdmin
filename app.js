import express  from "express";
import bcrypt from "bcrypt"
import bodyParser from "body-parser";
import mysql from "mysql"

const app=express()
const port=5000

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//MySql
const pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user: 'root',
    password:'',
    database:'nodejs_test'

})

//get all juices
app.get("/juices",(req,res)=>{
    //connect to the pool
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log("Working thread: "+connection.threadId)//hadi ghe zedteha for info que moumkin naklhoud l id d thread li khedam dak sa3a f had cnnction

        connection.query("SELECT * FROM node",(err,rows)=>{
            connection.release()//return the connecion to pool
            if(!err){
                res.send(rows)
            }
            else{
                console.log(err)
            }
        })

    })
})

//get a specific juice by id
app.get("/juices/:id",(req,res)=>{
    //connect to the pool
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log("Working thread: "+connection.threadId)//hadi ghe zedteha for info que moumkin naklhoud l id d thread li khedam dak sa3a f had cnnction
        let id=[req.params.id]
        connection.query("SELECT * FROM node where id = ?",id,(err,rows)=>{ //? placeholder where the value we passe(id) will be written  "query ?",what to put in the place of ? OR "query = "+what to put exple(SELECT * FROM node where id = ",+id)
            connection.release()//return the connecion to pool
            if(!err){
                res.send(rows)
            }
            else{
                console.log(err)
            }
        })

    })
}
)

//Delete juice
app.delete("/juices/:id",(req,res)=>{
    //connect to the pool
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log("Working thread: "+connection.threadId)//hadi ghe zedteha for info que moumkin naklhoud l id d thread li khedam dak sa3a f had cnnction
        let id=[req.params.id]
        connection.query("delete FROM node where id = ?",id,(err,rows)=>{ //? placeholder where the value we passe(id) will be written  "query ?",what to put in the place of ? OR "query = "+what to put exple(SELECT * FROM node where id = ",+id)
            connection.release()//return the connecion to pool
            if(!err){
                res.send(`Juice with the id: ${id} has been deleted successfully`)
            }
            else{
                console.log(err)
            }
        })

    })
}
)

//Insert juice
app.post("/juices",(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log("Working thread: "+connection.threadId)//hadi ghe zedteha for info que moumkin naklhoud l id d thread li khedam dak sa3a f had cnnction
        const params=req.body
        connection.query("Insert into node SET ?",params,(err,rows)=>{
            connection.release()//return the connecion to pool
            if(!err){
                res.send(`Juice with the name: ${params.name} has been added successfully`)
            }
            else{
                console.log(err)
            }
        })

    })

})

//Update a juice
app.put("/juices/:id",(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err
        console.log("Working thread: "+connection.threadId)//hadi ghe zedteha for info que moumkin naklhoud l id d thread li khedam dak sa3a f had cnnction
        const id=[req.params.id]
        let params=req.body
        connection.query("update node SET ? where id= ?",[params,id],(err,rows)=>{
            connection.release()//return the connecion to pool
            if(!err){
                res.send(`Juice with the id: ${id} has been successfully updated`)
            }
            else{
                console.log(err)
            }
        })

    })

})



app.listen(port,()=>{
    console.log("Listening on port: "+port);
})