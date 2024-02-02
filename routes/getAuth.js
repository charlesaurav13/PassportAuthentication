const express = require("express");
const authController = require("../controllers/authController.js");
const passport = require("passport")

const routes = express.Router();

// Authentication routes

//login with google
routes.get("/google",passport.authenticate("google", {scope: ['profile','email']}));
routes.get("/google/callback",passport.authenticate("google",{ successRedirect:"protected",failureRedirect: "/api/v1/auth/login"}));


//username and password routes
routes.get("/login",authController.getLogin);
routes.post(
  "/login",passport.authenticate("local",{
    successRedirect: "protected",
    failureRedirect: "login",
  }),authController.postLogin
);


routes.get("/google/protected",authController.getProtectedGoogle)
routes.get("/register", authController.getRegister);
routes.post("/register", authController.postRegister);
routes.get("/logout", authController.getLogout);
routes.get("/protected", authController.getProtected);

module.exports = routes;
