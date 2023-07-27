const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const serveStatic = require('serve-static');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const db = process.env.DB_CLOUD;

// database connection
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    const conn = await mongoose.connect(db);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static('public'));

// routes
app.use('/api/admin', require('./routes/admin'));
app.use('/images', require('./routes/images'));

//Connect to the database before listening
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
  });
});

// Serve FE
if (process.env.NODE_ENV === 'production') {
  app.use(serveStatic(path.join(__dirname, 'client/dist')));
  app.get(/.*/, (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client/dist/index.html'))
  );
}
