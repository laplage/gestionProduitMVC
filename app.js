const express = require('express')

const app = express();


const CategorieRouter = require('./routes/CategorieRouter.js')


app.use('/api/v1/categories',CategorieRouter)

app.listen(3006,()=>{
    console.log('Server running on port 3006  http://localhost:3006' )
})