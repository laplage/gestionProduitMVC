const express = require('express')
const ProduitRouter = express.Router()
// Création des routes
    ProduitRouter.route('/')
        .get((req,res)=>{

        })
        .post((req,res)=>{

        })
    ProduitRouter.route('/:id')
        .get((req,res)=>{

        })   
        .delete((req,res)=>{

        })
        .put((req,res)=>{

        })
 module.exports = ProduitRouter;