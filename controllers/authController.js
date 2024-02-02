const { log, error } = require("console")
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
        const user = new Usermodal({
            username:username,
            email:email,
            password:password
        })
        await user.save()
        res.send({msg:"User created"})
        

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