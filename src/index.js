console.clear()

const express = require('express');
const { join } = require('path');
const path = require('path');
const url = require('url');
const indexRoutes = require('../src/routes/index');


const app = express();
const PORT = 6500;

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(indexRoutes.default);

app.use(express.static(join(__dirname,'public')));

 


app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});