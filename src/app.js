const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const path = require('path');
const app = express();
require('dotenv').config();
// learning pull request
// To get the database password from the .env file
const DB_PASS = process.env.DB_PASSWORD;
const DB_USERNAME = process.env.DB_USERNAME;

// Importing routes
const customerRoutes = require('./routes/customer');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'crud',
    password: PASS,
    port: '3306',
    database: 'crud_operations'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', customerRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
})