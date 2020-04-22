const express = require ('express');
const postrouter = express.Router();

//import th model
const Product = require('../models/Product');


    //GET A PRODUCT
    postrouter.get('/:pid',async (req,res)=> {
         
        const prodId  = req.params.pid;
        console.log("product Id "+prodId);

        try{
             const allProducts = await Product.findById(prodId);
             
             allProducts != null ? res.status(200).json(allProducts) : res.status(404).json("message:Product not found");

         }catch(err) {
             res.status(500).json({message: err});
        }
      });

//GET ALL PRODUCTS
      postrouter.get('/',async (req,res)=> {
      try{
           const allProducts = await Product.find();
           res.status(200).json(allProducts);
      }catch(err) {
        res.status(500).json({message: err});
      }
    });
    //POST A PRODUCT
    postrouter.post('/',async (req,res) => {
        console.log(req.body);
        const product = new Product (
            {
                 productName: req.body.productName,
                 productPrice: req.body.productPrice   ,
                 productId: req.body.productId,
                 operatingSystem: req.body.operatingSystem,
                 companyName: req.body.companyName,
                 productDescription: req.body.productDescription,


            }
        );
        try{
            const savedPost = await product.save();
            res.status(201).json({message: "record is created"});
        }catch(err) {
            res.status(500).json({message: err});
        }
        
     });
     
    //delete a product
     postrouter.delete('/:pid',async (req,res)=> {
        try{
             const deletedProduct = await Product.remove({_id: req.params.pid});
             res.status(200).json({message: "record is deleted"});
             
        }catch(err) {
            res.status(500).json({message: err});
        }
      });
    
     //update the product
     postrouter.patch('/:pid',async (req,res)=> {
        try{
             const updatedProduct = await Product.updateOne({_id: req.params.pid}, {$set: {companyName:req.body.companyName,productPrice:req.body.productPrice,operatingSystem:req.body.operatingSystem,productDescription:req.body.productDescription,productName:req.body.productName}});
             res.status(200).json({message: "record is updated"});
             
        }catch(err) {
            res.status(500).json({message: err});
        }
      });
   
module.exports = postrouter