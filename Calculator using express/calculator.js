const express = require("express")
const app = express()
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html") //__dirname means the current directory name
})


app.listen(3000,function(){
    console.log("Server started")
})