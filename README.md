
# Passport Authentication Strategies





### Overview
This project is an example of a web application with user authentication implemented using Passport.js. It supports both local (username and password) and Google OAuth2.0 authentication strategies.
### Features
* Local Authentication: Users can register with a username and password. Passwords are securely hashed using bcrypt.

* Google OAuth2.0 Authentication: Users can also log in using their Google accounts via OAuth2.0. This is achieved using Passport.js with the Google strategy.

* Session Management: The application utilizes express-session and connect-mongo for session management. User sessions are stored in MongoDB, ensuring persistence across server restarts.
## Installation

Open cmd and type

```bash
 git clone https://github.com/charlesaurav13/PassportAuthentication

 cd PassportAuthentication

 npm install
```
    
## Deployment

To deploy this project,make sure you are in the same directory of the project
```bash
  npm start
```


## API Reference

#### Login page for local authentication

```http
  GET /api/v1/auth/login
```
#### Registration page for local authentication

```http
  GET /api/v1/auth/register 
```

#### Initiates Google OAuth2.0 authentication

```
  GET /api/v1/auth/google
```
#### Logs out the user

```
  GET /api/v1/auth/logout
```
#### Protected route requiring authentication for local

```
  GET /api/v1/auth/protected
```
#### Protected route specifically for users authenticated with Google

```
  GET /api/v1/auth/google/protected
```