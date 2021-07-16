const express = require('express')

const app = express();


const CategorieRouter = require('./routes/CategorieRouter.js')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api/v1/categories',CategorieRouter)

app.listen(3006,()=>{
    console.log('Server running on port 3006  http://localhost:3006' )
})
// // console.log('Promesse 1')
// // console.log('Promesse 2')
// // console.log('Promesse 3')

//     // Délcaration des promesses

//         const p1 = new Promise((resolve,reject)=>{
//             //nous pouvons avoir l'exécution de requête sql ou des calculs
//             const somme = 150 + 15
//             if(somme < 200){
//                 // cas de réussite
//                 resolve(somme)
//             }else{
//                 // cas d'échec
//                 reject("Erreur")
//             }
//         })
//         // le passage de paramètre à la promesse se fera dans fonction qui retournera la promesse
//         const fonc = (a,b)=>{
//             return new Promise((resolve,reject)=>{
//                 const somme = a + b
//                 if(somme < 200){
//                     // cas de réussite
//                     resolve(somme)
//                 }else{
//                     // cas d'échec
//                     reject("Erreur")
//                 }
//             })
//         }

//         // remplace des fonction resolve et reject par une fonction de rappelle (next ou callback)
//                 // le passage de paramètre à la promesse se fera dans fonction qui retournera la promesse
//                 const fonc = (a,b)=>{
//                     return new Promise((next)=>{
//                         const somme = a + b
//                         if(somme < 200){
//                             // cas de réussite
//                             next(somme)
//                         }else{
//                             // cas d'échec
//                             next("Erreur")
//                         }
//                     })
//                 }

//     //  L'utilisation des Promesses
//         p1.then((result)=>{
//             console.log('Resultat = ' + result)
//         }).catch((err)=>{
//             console.log(err)
//         })
//     //

//         fonc(150,20).then((result)=>{
//             console.log(result)
//         }).catch(()=>{
//             console.log('Erreur')
//         })