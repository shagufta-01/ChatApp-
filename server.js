const express = require("express")
const app = express()
const chats = require("./data/data")


app.get("/",(req, res)=>{
  res.send("API is Running..")
})

app.get("/api/chat",(req, res)=>{
res.send(chats)
})


app.get("/api/chat/:id",(req, res)=>{
 const singleChat = chats.find((c)=>c._id===req.params.id)
 console.log(singleChat)
 res.send(singleChat)
 
  })
app.listen(9000,()=>{
  console.log(`Server started at port 9000`)
})