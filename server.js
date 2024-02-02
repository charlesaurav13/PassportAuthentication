const { log } = require("console")
const express = require("express")
const dotenv =  require("dotenv")
const passport = require("passport")
const session = require("express-session")
const MongoStore = require('connect-mongo')
require("./database/db")
const authRoutes = require("./routes/getAuth")

const app = express()

dotenv.config({path:"./config.env"})
const PORT = process.env.PORT || 3000


app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

// Middleware
// app.use(express.json())

app.use(
    session({
      secret:process.env.SECRET,
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({mongoUrl:process.env.DATABASE_URL,collectionName:"passportsession"}),
    })
  )
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())
//routes
app.use("/api/v1/auth",authRoutes);

app.listen(PORT,()=>{
    log(`[*] Server is up and Running on port ${PORT}`)
})