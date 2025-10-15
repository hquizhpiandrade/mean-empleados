const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//settings
app.set('puerto', process.env.PORT || 3000);
app.set('nombreApp', 'Gestión de empleados');

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use('/api/empleados', require('./src/routes/empleados.routes'));

module.exports = app;
