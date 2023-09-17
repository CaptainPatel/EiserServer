const express = require('express');
const app = express();
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema ({
  username : String ,
  email : String ,
  pass : String ,
})

const User = mongoose.model("User" , userSchema);

app.use(express.static("public"));
app.use(express.json());
 
app.get("/" , (req , res) => {
  console.log(")")
})
app.get("/about" , (req , res) => {
  res.sendFile(__dirname + "/about.html")
})

app.post("/createUser" , async (req ,res) => {
  try {
      let {username , email , pass} = req.body;

    let newUser = await User.create({
      username , email  , pass ,
    })

    res.json({
      success : true , 
      user : newUser ,
    })
  } catch (er) {
    res.json({
      success : false ,
      error : err.message ,
    })
  }
})


mongoose.connect("mongodb+srv://Captain:MrServer1@cluster0.itlag1n.mongodb.net/Eiser").then(() => {
  app.listen(5000 , () => {
    console.log("server started on port 5000 && connected to DB")
  })
}).catch(console.log)

































































// const mongoose = require('mongoose');
// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require('mongoose');
// const _ = require("lodash");
// require("dotenv").config();

// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

// let name = process.env.DATABASE_ADMIN_NAME , password = process.env.DATABASE_ADMIN_PASSWORD;
// mongoose.connect(`mongodb+srv://${name}:${password}@cluster0.itlag1n.mongodb.net/todoListDB` , {useNewUrlParser : true});

// // create product schema
// const  productSchema = {
//   name : String
// };

// // create product model
// const Product = new mongoose.model("Product" , productSchema);

// const belt = new Product({
//   name : "Royals Belt",
// })

// app.get("/" , function (req , res){

// })



