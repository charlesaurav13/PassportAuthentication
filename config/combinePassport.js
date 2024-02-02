const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const Usermodal = require("../models/userSchema");
const UserGoogle = require("../models/userSchemaGoogle");
const bcrypt = require("bcrypt");

// Local Strategy


passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      const user = await Usermodal.findOne({ username: username });

      if (!user) {
        return done(null, false, { message: 'Incorrect credentials'});
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return done(null, false, { message: 'Incorrect credentials' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID:process.env.GOOGLE_CLIENT_ID ,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
      callbackURL:process.env.CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        image: profile.photos[0].value,
        email: profile.emails[0].value,
      };

      try {
        let user = await UserGoogle.findOne({ googleId: profile.id });

        if (user) {
          done(null, user);
        } else {
          user = await UserGoogle.create(newUser);
          done(null, user);
        }
      } catch (err) {
        console.error(err);
        done(err);
      }
    }
  )
);

// Serialize and deserialize user for both strategies
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const userLocal = await Usermodal.findById(id);
    if (userLocal) {
      done(null, userLocal);
    } else {
      const userGoogle = await UserGoogle.findById(id);
      done(null, userGoogle);
    }
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
