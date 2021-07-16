const express = require('express')
const mysql = require('mysql')

//Création du router
const CategorieRouter = express.Router()

//const controllerCat = require('../controllers/CategorieController')

const db =  mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'gestion_produits'
})
//3-    Etablir la connexion via l'objet de connexion db
db.connect((err)=>{
    //liaison entre le modele et le contrôlleur (ici le dossier route est considéré comme le contrôlleur)
        let Categorie = require('../models/categorie-class')(db) // passage de paramètre (db) à un module
    // Création des routes
        CategorieRouter.route('/')
            .get(async(req,res)=>{
                let cat = await Categorie.getAllCategorie(req.query.limite)

                res.send(cat instanceof Error ? cat.message : cat)
            }) 
        CategorieRouter.route('/:id')
            .get(async(req,res)=>{
                let cat = await Categorie.getCategorieByID(req.params.id)
                
                res.send(cat instanceof Error ? cat.message : cat)
            })            
})
 module.exports = CategorieRouter;







     //     .get(controllerCat.getAllCategorie)

    //     .post(controllerCat.updateCategorie)

    // CategorieRouter.route('/:id')
    //     .get(controllerCat.getCategorieByID)   
    //     .delete(controllerCat.deleteCategorieByID)
    //     .put(controllerCat.updateCategorie)