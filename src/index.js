console.clear()

const express = require('express');
const { join } = require('path');
const path = require('path');
const { env } = require('process');
const url = require('url');
const indexRoutes = require('../src/routes/index');


const app = express();
app.listen(process.env.PORT || 3500);

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(indexRoutes.default);

app.use(express.static(join(__dirname,'public')));

    


console.log('Server is listening on port', process.env.PORT || 3500)