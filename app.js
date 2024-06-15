const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
app.use(express.static("public"))
app.use(express.json())
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/token",(req,res)=>{
    console.log(req.body.token)
    res.send("done")
})
server.listen(3000,()=>{
    console.log("server run")
})