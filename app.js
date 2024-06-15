const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)

app.get("/",(req,res)=>{
    if (req.query){
        console.log(req.query.token)
        console.log(req.query)
    }
    res.send("done")
})

server.listen(3000,()=>{
    console.log("server run")
})