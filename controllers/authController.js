const { log} = require("console")
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
    res.send("get protected")

}

const getProtectedGoogle = (req,res)=>{
    res.send("google protected route")

}

const getLogout = (req,res)=>{
    res.send("Logout")
}

module.exports = {getLogin,getRegister,getLogout,postLogin,postRegister,getProtected,getProtectedGoogle}