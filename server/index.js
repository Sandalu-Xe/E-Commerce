const express = require('express');
const app = express();
const cors = require('cors')
const User=require("./Models/usermode.js")


const mongoose=require('mongoose')
console.log(" Hello ,sandalu thushan")
const dbURI ="mongodb+srv://user1:Thush12213@cluster0.9qwykfs.mongodb.net/mobile?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());
app.use(cors())

mongoose.connect(dbURI,{
})

    .then(() => {
        console.log(' MongoDB connected successfully');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
}) 

app.post("/signup",(req,res)=>{


    User.create(req.body)
    .then(emply=>res.json(emply))
    .catch(err=>res.json(err))


})

app.post('/api/login', async (req, res) => {

    const user =await User.findOne({
        email:req.body.email,
        password:req.body.password,
    })

});

// checking the 

app.listen(1332, () => {
    console.log("Server running at http://localhost:1332");
}); 