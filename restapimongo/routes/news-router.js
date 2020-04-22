const express = require ('express');
const newsRouter = express.Router();
const Request = require("request");

// const NEWS_URL = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-13&sortBy=publishedAt&apiKey=af9da600d0cf4d0da206d9d0868f7fe4";

//  //GET A PRODUCT
//  newsRouter.get('/',async (req,res)=> {
         
//             Request.get(NEWS_URL, (error, response, body) => {
//             if(error) {
//                 res.json(error);
//             }
//             res.json(JSON.parse(body));
            
//         });
    
//   });

  module.exports = newsRouter