const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, console.log('Server ready!'));
