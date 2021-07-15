const express = require('express')
const mysql = require('mysql')
const CategorieRouter = express.Router()

const controllerCat = require('../controllers/CategorieController')

const db =  mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'gestion_produits'
})
//3-    Etablir la connexion via l'objet de connexion db
db.connect((err)=>{
    // Création des routes
    CategorieRouter.route('/')
        .get((req,res)=>{
             // liste de toutes les catégories
               if(req.query.limite != undefined && req.query.limite > 0){
                    let limite = parseInt(req.query.limite)
                    db.query('SELECT * FROM categories LIMIT 0,?',[limite],(err,data)=>{
                        if(err)
                            res.send('Erreur d\'exécution de la requête SQL : ' + err.message)
                        else
                            res.send(data)
                    })
               }else if(req.query.limite != undefined){
                    res.send('Mauvaise limite')
               }else{
                    db.query('SELECT * FROM categories',(err,data)=>{
                        if(err)
                            res.send('Erreur d\'exécution de la requête SQL ')
                        else
                            res.send(data)
                    })
               }
         })
})
    //     .get(controllerCat.getAllCategorie)

    //     .post(controllerCat.updateCategorie)

    // CategorieRouter.route('/:id')
    //     .get(controllerCat.getCategorieByID)   
    //     .delete(controllerCat.deleteCategorieByID)
    //     .put(controllerCat.updateCategorie)
 module.exports = CategorieRouter;