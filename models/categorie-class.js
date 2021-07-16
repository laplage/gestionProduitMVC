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
            return new Promise((resolve,reject)=>{
                if(limite != undefined && limite > 0){
                    let max = parseInt(limite)
                    db.query('SELECT * FROM categories LIMIT 0,?',[max],(err,data)=>{
                        if(err)
                            reject(err)
                        else
                            resolve(data)
                    })
                }else if(limite != undefined){
                    reject('Mauvaise limite')
                }else{
                    db.query('SELECT * FROM categories',(err,data)=>{
                        if(err)
                            reject(err)
                        else
                            resolve(data)
                        })
                }
            })
        }
    //2-    Fonction qui permet de retourner une catégorie connaissant son id
        static getCategorieByID(id){
            return new Promise((resolve,reject)=>{

            })
        }
}