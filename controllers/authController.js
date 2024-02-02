const bcrypt = require("bcrypt")

const Usermodal = require("../models/userSchema")


const getLogin =(req,res)=>{
    res.render("login")

}
const getRegister = (req,res)=>{
    res.render("register")

}

const postLogin = (req,res)=>{
    res.send("post Login")

}
const postRegister = async (req,res)=>{
    const {username,email,password} = req.body;
       try{
        const hashedPassword = await bcrypt.hash(password, 10000);
        const user = new Usermodal({
            username,
            email,
            password:hashedPassword
        })
        await user.save()
        res.redirect("login");

       }catch(err){
        res.send(err.message)
       }
    }

const getProtected = (req,res)=>{
    if(req.isAuthenticated()){
        res.render("simpleuser",{user:req.user})
    }
    else{
        res.render("unauthorized");
    }
   

}

const getProtectedGoogle = (req,res)=>{
    if(req.isAuthenticated()){

        res.render("googlecard",{user:req.user})
    }
    else{
        res.render("unauthorized");
    }
   

}

const getLogout = (req,res)=>{
    req.logout((err)=>{
        res.redirect("/api/v1/auth/login")
    });
    
}

module.exports = {getLogin,getRegister,getLogout,postLogin,postRegister,getProtected,getProtectedGoogle}