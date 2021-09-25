const express = require("express")
const app = express()
app.get("/",function(req,res){  //route is "/" which also called the home route
    //console.log(request)
    res.send("<h1>Hello babe</h1>")  
})
app.get("/gg",function(req,res){
    res.send("<em>019.........</em>")
})
app.get("/me",function(req,res){
    res.send("My name is MD Ikramul Kayes")
})
app.listen(3000,function(){
    console.log("Server Started")
})