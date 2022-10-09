const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const db = process.env.DB_LOCAL;

// database connection
mongoose.connect(db, () => console.log('Connected to the database...'));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use('/public', express.static('public'));

// routes
app.use('/api/admin', require('./routes/admin'));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, console.log(`Server is running on port ${port}!`));
