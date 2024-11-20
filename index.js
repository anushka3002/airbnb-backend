const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const productRoute = require('./routes/product.route')
const app = express()
// ZrYclDLLP0zEGLiK
// anushka3002

//middleware
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/products", productRoute)

app.get('/', (req, res) => {
    res.send('Hello from node API server et')
})

mongoose.connect("mongodb+srv://anushkalyf:anushka3002@cluster0.64qtf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log('Connected to database')
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    });
}).catch(() => {
    console.log('wrong')
})