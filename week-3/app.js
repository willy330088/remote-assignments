const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const dataRoutes = require('./routes/getData');
const nameRoutes = require('./routes/myName');
const trackRoutes = require('./routes/trackName');

app.use(mainRoutes);
app.use('/getData', dataRoutes);
app.use('/myName', nameRoutes);
app.use('/trackName', trackRoutes);
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('The application is running on localhost: 3000!')
})