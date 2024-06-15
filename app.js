const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)

app.get("/",(req,res)=>{
    console.log(req.query.token)
    console.log(req.query)
})

server.listen(3000,()=>{
    console.log("server run")
})