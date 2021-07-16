// Création d'un attribut db
    let db
//  Initialisation de l'attribut
    module.exports = (objConnexion)=>{
        db = objConnexion
        return Categorie
    }
let Categorie = class{
    //1-    Fonction qui permet de retourner la liste de toutes les catégorie
        static getAllCategorie(limite){
            //return new Promise((resolve,reject)=>{
            return new Promise((next)=>{
                if(limite != undefined && limite > 0){
                    let max = parseInt(limite)
                    db.query('SELECT * FROM categories LIMIT 0,?',[max],(err,data)=>{
                        if(err)
                            next(err)
                        else
                            next(data)
                    })
                }else if(limite != undefined){
                    next(new Error('Mauvaise limite'))
                }else{
                    db.query('SELECT * FROM categories',(err,data)=>{
                        if(err)
                            next(err)
                        else
                            next(data)
                        })
                }
            })
        }
    //2-    Fonction qui permet de retourner une catégorie connaissant son id
        static getCategorieByID(id){
            //return new Promise((resolve,reject)=>{
            return new Promise((next)=>{  //on peut next ou callback   
                db.query('SELECT * FROM categories WHERE id = ?',[id],(err,data)=>{
                    if(err){
                        next(err)
                    }else{
                        if(data[0]!=undefined){
                            next(data[0])
                        }else{
                            next(new Error('Wrong ID'))
                        }
                    }
                })
            })
        }
    //3-    Méthode qui supprime ue catégorie
        static deleteCategorieByID(id){
            //return new Promise((resolve,reject)=>{
            return new Promise((next)=>{
                db.query('SELECT * FROM categories WHERE id = ?',[id],(err,data)=>{
                    if(err)
                        next(err)
                    else{
                        if(data[0]!=undefined){
                            db.query('DELETE FORM categories WHERE id =?',[id],(err)=>{
                                if(err)
                                    next(err)
                                else
                                    next('Cette gatégorie a été supprimée avec succes')
                            })
                        }else{
                            next(new Error('Wrong ID'))
                        }
                    }
                })
            })
        }
    //4-    Méthode de mise-à-jour d'une catégorie
        static updateCategorie(cat){
            return new Promise((next)=>{
                db.query('SELECT * FROM categories WHERE id = ? ',[cat.id],(err,data1)=>{
                    if(err){
                        next(err)
                    }else{
                        if(data1[0]!=undefined){
                            db.query('SELECT * FROM categories WHERE libelle = ? AND id != ?',[cat.libelle,cat.id],(err,data2)=>{
                                if(err){
                                    next(err)
                                }else{
                                    if(data2[0]!=undefined){
                                        next(new Error('Cette catégorie existe déjà dans la base'))
                                    }else{
                                      db.query('UPDATE categories SET libelle = ? WHERE id = ?',[cat.libelle,cat.id],(err)=>{
                                          if(err)
                                            next(err)
                                          else{
                                              next('Catégorie mise-à-jour avec succes')
                                          }  
                                      })  
                                    }
                                }
                            })
                        }else{
                            next(new Error('Cette catégorie n\'existe pas dans la base'))
                        }
                    }
                })
            })
        }
    //5-    Méthode d'ajout d'une catégorie
        static insertCategorie(libelle){
            return new Promise((next)=>{
                db.query('SELECT * FROM categories WHERE libelle = ?',[libelle],(err,data)=>{
                    if(err)
                        next(err)
                    else{
                        if(data[0]!=undefined){
                            next(new Error('Cette catégorie existe déjà dans la base'))
                        }else{
                            db.query('INSERT INTO categories values(default,?)',[libelle],(err)=>{
                                if(err)
                                    next(err)
                                else    
                                    next('Catégorie insérée avec succes')
                            })
                        }
                    }
                })
            })
        }
    //6-    Méthode de recherche des catégories par mots clés
        
}