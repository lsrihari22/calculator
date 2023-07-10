const express = require('express');
const bosyParser = require('body-parser');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// TO access form inputs
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.html')
})

app.post('/',(req,res)=>{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result of the calculation is: "+result);
})

app.get('/bmicalculator',(req,res)=>{
    res.sendFile(__dirname +'/bmicalculator.html')
})

app.post('/bmicalculator',(req,res)=>{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.weight);
    var bmi = weight / (height*height);

    res.send("Your BMI is:"+bmi);
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});