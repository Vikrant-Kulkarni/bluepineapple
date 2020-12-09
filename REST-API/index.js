var express = require('express')
var bodyParser = require ('body-parser');
var mysql = require('mysql');
const cors = require('cors');


const router = require('./user.js')

const app = express();



const port = 5001;

app.use(bodyParser.urlencoded({ extended : false}))

app.use(bodyParser.json())
app.use(cors());
app.use(router)

app.listen(port,() => console.log(`Listen to port ${port}`))

module.exports = app;