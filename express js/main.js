const express = require("express")
const app = express()
app.get("/",function(request,response){
    //console.log(request)
    response.send("Whats up")
})

app.listen(3000,function(){
    console.log("Server Started")
})