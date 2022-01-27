const r = require("./middlewares/validation");
const validation = require("./middlewares/validationmiddl");
const jwt = require("jsonwebtoken");
const express = require("express");
const prisma=require("./shared/prisma")
const dotenv = require('dotenv');
dotenv.config();
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("I am working");
});


app.post("/register", validation(r), async (req, res) => {
  const { full, email, pass } = req.body;


  const olduser=await prisma.user.findMany({
    where:
    {
      email:email,
    }
    });

  if(olduser=="")
  {
    const user = await prisma.user.create({
      data: {
          Full_name: full,
          email: email,
          password:pass,
         
      },
  
    });


    if(user==""){

      console.log("did not register yet")
    }
    else{
  
      console.log("already dn");
    }



    
  }
  else
  {

    console.log("already exits made a new one")
  }


 




  
});
app.get("/login", async(req, res) => {
  
    const { email, pass } = req.body;
   if(!(email&& pass))
   {
     console.log("error");
   }
    const data = await prisma.user.findMany({
    where:
    {
      email: email,
      password:pass,
    }

    })
  
    if(data==""){
      console.log("wrong data");
      res.send("wrong data")
  }
  else{
    const token = jwt.sign({ user_id:prisma.user.id, email }, process.env.TOKEN_GET, {
      expiresIn: "20h",
    });
    res.send("login in")
    console.log(token)
  
  }
 
});
app.listen(3002, () => {
  console.log("listening on port 3002");
});
