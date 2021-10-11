
const express = require('express');
const morgan = require('morgan');
const engine = require('ejs-mate');
const path = require('path');

const app = express();

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//SETTIGNS
app.set('port', process.env.PORT || 4001);

//MDW
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//GLOBAL VAR

//ROUTES
app.use(require('./routes/'));

//PUBLIC
app.use(express.static(path.join(__dirname, 'public')));
//STARTING

app.listen(app.get('port'), () => {
 console.log('Server ' , app.get('port'));
});


