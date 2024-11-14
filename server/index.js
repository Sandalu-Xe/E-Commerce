const express = require('express');
const app = express();
const cors = require('cors')
const User=require("./Models/usermode.js")

const mongoose=require('mongoose')
console.log(" Hello ,sandalu thushan")
const dbURI ="mongodb+srv://user1:Thush12213@cluster0.9qwykfs.mongodb.net/mobile?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());
app.use(cors())

app.get('/', async (req, res) => {
    res.send(" hello from node api sandalu thushan ");

})

app.get('/users', async (req, res) => {
    try {
        
        const users = await User.find({}); 

       
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await Signup.findOne({ email });
      if (!user) {
        return res.json({ err: "User Not Found" });
      }
      if (user.password === password) {
        return res.json({ status: "ok" });
      } else {
        return res.json({ status: "Incorrect Password" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: "Server Error" });
    }
  });


app.post('/signup', async (req, res) => {
    try {
      
      //  const user = await User.create(req.body);

      const { name,email,password,confirmPassword} = req.body;
      const newuser = new User({ name, email, password,confirmPassword });
      const saveduser = await newuser.save();
      res.status(200).json(saveduser);
     
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  

mongoose.connect(dbURI,{
})
    .then(() => {
        console.log(' MongoDB connected successfully');

            
      app.listen(1332, () => {
             console.log("Server running at http://localhost:1332");
              }); 
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
}) 



// checking the 
