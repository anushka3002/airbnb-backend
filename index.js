const express = require('express')
const mongoose = require('mongoose')
const app = express()
// ZrYclDLLP0zEGLiK
// anushka3002

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello from node API server et')
})

app.post('/api/products', async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

mongoose.connect("mongodb+srv://anushkalyf:anushka3002@cluster0.64qtf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log('Connected to database')
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    });
}).catch(()=>{
    console.log('wrong')
})