const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html") //__dirname means the current directory name
})

app.post("/",function(req,res){
    var a = req.body.num1
    var b = req.body.num2
    var c = (Number(a) / (Number(b)*(Number(b))))
    res.send("Your BMI is "+c)
})


app.listen(3000,function(){
    console.log("Server started")
})