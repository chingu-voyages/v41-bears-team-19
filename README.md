# Help A Shelter - Pet shelter hub to maximize visualization and help.

A simple and collaborative fullstack App, built for pet shelters, to maximize their web traffic, minimize their debt by acquiring donors and people willing to adopt animals.

![login]()
![signup]()
![dashboard page]()

> Be sure to add that lovely star 😀 and fork it for your own copy

---

# How it's made

**Tech used:** EJS, CSS, JavaScript, Node, Express, MongoDB and passport.js.

**Notable Dependencies:**

* connect-mongo (https://www.npmjs.com/package/connect-mongo)
   - Used to save cookie in database that allowed for user's session to persist.
* dotenv (https://www.npmjs.com/package/dotenv)
   - Intergration of .env file that allows protection and processing of environment variables.
* express-session (https://www.npmjs.com/package/express-session)
   - Middleware that aids formating of user session cookie data. Used in cooperation with 'connect-mongo' to store the session in the database.
* mongoose (https://mongoosejs.com/)
   - Schema-based solution to model application data. Used to validate/organize database user and story entries.
* morgan (https://www.npmjs.com/package/morgan)
   - Node. js and Express middleware to log HTTP requests and errors. Used to simply process of testing/troubleshooting during development.
* passport (https://www.passportjs.org/)
   - Authentication middleware for Node.js. Used to modularize the authentication process with OAuth and Google login.
* passport-local (https://www.passportjs.org/packages/passport-local/)
   - The local authentication strategy authenticates users using a username and password.
* ejs- local (https://ejs.co/)
   - embeded javascript templating language for the frontend.
* bcrypt (https://www.npmjs.com/package/bcrypt)
   - A library to help you hash passwords.

---

# Lessons Learned:

 

---

# How to Get it Working:

Add a .env file in the config folder with these two values:
* PORT = 2121 //or whatever you choose
* DB_STRING =  //MongoDB connection string

---

# Collaborators:

[Amanda Alexandre](https://github.com/amandaalexandre)

[Henryque Lucena](https://github.com/HenryLucena)

[Muaad Ahmed](https://github.com/Muaadahmed)

[Devin Jaggernauth](https://github.com/mentalcaries)

[Federico Chaves](https://github.com/fedechaves)
