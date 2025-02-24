<<<<<<< HEAD
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const {PORT_SERVER} = process.env;
const registerController = require('./controllers/register');
const postController = require('./controllers/post');
const profileController = require('./controllers/profile');
const loginController = require('./controllers/login');



app.use(bodyParser.json());
app.get('/', function (req, res, next){
    res.send("index");
})


app.use('/login', loginController);
app.use('/profile', profileController);
app.use('/register', registerController);
app.use('/home', postController);
app.listen( PORT_SERVER, function () {
    console.log(`Server running in http://Localhost:${PORT_SERVER}`);
});

=======
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
//controllers
const registerController = require('./controllers/register');
const postController = require('./controllers/post');
const profileController = require('./controllers/profile');
const loginController = require('./controllers/login');
const scrapperController = require('./controllers/scrapper');



app.use(bodyParser.json());
app.get('/', function (req, res, next){
    res.send("index");
})
//Routes
app.use('/scrapper', scrapperController);
app.use('/login', loginController);
app.use('/profile', profileController);
app.use('/register', registerController);
app.use('/home', postController);

app.listen( process.env.PORT, '0.0.0.0');

>>>>>>> 4d687fc07faef7c591c8501ac5bf844bacfebf6e
