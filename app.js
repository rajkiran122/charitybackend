const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

//Routes
app.use('/api/v1', require('./routes/projectRoutes'));

//Error handler
app.use(require('./controllers/errorController'));

module.exports = app;