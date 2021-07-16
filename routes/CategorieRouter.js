const express = require('express')
const mysql = require('mysql')
let {isErreur} = require('../config')
//Création du router
const CategorieRouter = express.Router()
let cat
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
    
    const app = express()
    // les middlewares

    // Création des routes
        CategorieRouter.route('/')
            .get(async(req,res)=>{
                cat = await Categorie.getAllCategorie(req.query.limite)
                res.send( isErreur(cat) ? cat.message : cat)
            }) 
            .post(async (req,res)=>{
                cat = await Categorie.insertCategorie(req.body.libelle)
                res.send( isErreur(cat) ? cat.message : cat)
            })
        CategorieRouter.route('/:id')
            .get(async(req,res)=>{
                cat = await Categorie.getCategorieByID(req.params.id)
                res.send(isErreur(cat) ? cat.message : cat)
            })  
            .delete(async(req,res)=>{
                cat = await Categorie.deleteCategorieByID(req.params.id)
                res.send(isErreur(cat) ? cat.message : cat)
            })  
            .put(async(req,res)=>{
                let categorie = {
                    id : req.params.id,
                    libelle : req.body.libelle
                }
                cat = await Categorie.updateCategorie(categorie)
                res.send(isErreur(cat) ? cat.message : cat)
            })   
        CategorieRouter.route('/mc/:mc') 
            .get(async(req,res)=>{
                cat = await Categorie.rechercheCategorieParMC(req.params.mc)
                res.send(isErreur(cat) ? cat.message : cat)
            })    
})
 module.exports = CategorieRouter;







     //     .get(controllerCat.getAllCategorie)

    //     .post(controllerCat.updateCategorie)

    // CategorieRouter.route('/:id')
    //     .get(controllerCat.getCategorieByID)   
    //     .delete(controllerCat.deleteCategorieByID)
    //     .put(controllerCat.updateCategorie)