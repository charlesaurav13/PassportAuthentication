const { log } = require("console");
const express = require("express");
require("dotenv").config();
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("./database/db");
const authRoutes = require("./routes/getAuth");
require("./config/combinePassport")
const path = require("path")


const app = express();

const PORT = process.env.PORT || 3000;
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
    store: new MongoStore({
      mongoUrl: process.env.DATABASE_URL,
      collectionName: "passportsession"
    }),
  })
);
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
//routes
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  log(`[*] Server is up and Running on port ${PORT}`);
});
