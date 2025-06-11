const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const asysncHandler = require('express-async-handler');
const dotenv = require('dotenv')
dotenv.config();

const app = express();
const port = process.env.PORT

// Middleware
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

// static folder
app.use('/image/products', express.static('public/products'));
app.use('/image/category', express.static('public/category'));
app.use('/image/poster', express.static('public/posters'));

const URL = process.env.MONGO_URL;
mongoose.connect(URL)
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database...'))

// Routes
app.use('/categories', require('./routes/category'));
app.use('/subCategories', require('./routes/subCategory'));
app.use('/brands', require('./routes/brand'));
app.use('/variantTypes', require('./routes/variantType'));
app.use('/variants', require('./routes/variant'));
app.use('/products', require('./routes/product'));
app.use('/couponCodes', require('./routes/couponCode'));
app.use('/posters', require('./routes/poster'));
app.use('/users', require('./routes/user'));
app.use('/orders', require('./routes/order'));
app.use('/payment', require('./routes/payment'));
app.use('/notification', require('./routes/notification'));

//Example rote using asyncHandler directly in app.js
app.get('/', asysncHandler(async(req, res) => {
   res.json({ error: false,message: 'API working successfully', data: null})
}))

// Global Error handler
app.use((error,req,res,next) => {
   res.status(500).json({error: true, message: error.message,data: null})
})

app.listen(port,() => {
   console.log(`Server is Listening on :${port}`);
})