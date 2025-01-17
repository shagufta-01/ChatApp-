const express = require("express")
const app = express()
const chats = require("./data/data")
const dotenv = require("dotenv")
dotenv.config()
app.get("/",(req, res)=>{
  res.send("API is Running..")
})

app.get("/api/chat",(req, res)=>{
res.send(chats)
})


app.get("/api/chat/:id",(req, res)=>{
 const singleChat = chats.find((c)=>c._id === req.params.id)
 console.log(singleChat)
 res.send(singleChat)
 
  })
  const PORT = process.env.PORT ||9000
app.listen(PORT,()=>{
  console.log(`Server started at port ${PORT}`)
})