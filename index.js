const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); //cors origin
app.use(express.json()); 
const mongoose = require('mongoose');
// mongoose.set('strictQuery', false); 
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('ITP Backend API Running');
})

connectMongoDB().then(()=>console.log("MongoDB connection established!!")).catch(err => console.log(err));

async function connectMongoDB() {
  await mongoose.connect('mongodb+srv://code94:code94_1234@cluster0.ioecl5j.mongodb.net/?retryWrites=true&w=majority');
}

app.use('/product', require('./route/product.route'));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})