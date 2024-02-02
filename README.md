
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
Make a .env file and make these variables and put those values.
```bash
PORT
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
CALLBACK_URL
SECRET
DATABASE_URL
```
    
## Google credentials
First we have to get Google credentials . To get credentials if don’t already have them go to https://console.cloud.google.com/

1)create a new project

2)Select the project and click credentials and the select OAuth client ID

3)Now Select Web Application in application type.

4)Input your app name or whatever else you like , in Authorized JavaScript origins add this line http://localhost:9000  and in Authorized redirect URIs field add this line http://127.0.0.1:9000/api/v1/auth/google/callback and the click to create .

5)Now copy your Google client ID and Google client secret and paste above in environment variables.
## Deployment

To deploy this project,make sure you are in the same directory of the project
```bash
  npm start
```


## API Reference

#### Login page for local authentication

```
  GET /api/v1/auth/login
```
#### Registration page for local authentication

```
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
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@charlesaurav13](https://github.com/charlesaurav13)

