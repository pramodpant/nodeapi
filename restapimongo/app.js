
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const server = express();

 // this will implement CORS for all resources on this server (3000).
server.use(cors()); 

   //no body-parser lib required from node 12 onwards. it is already included now in express.
server.use(express.json());


//import routes
const postRoute = require ('./routes/postproduct');
// const newsRoute = require ('./routes/news-router');


//connect the db
mongoose.connect('mongodb://localhost:27017/productdb', {useNewUrlParser: true}, () => console.log('connected to db !'));

server.use('/product',postRoute);
//server.use('/news',newsRoute);

server.listen(3000);
