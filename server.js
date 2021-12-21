const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.use('/api/v1/product', require('./routes/product'));

const PORT = +process.env.PORT || 3001;

require('./db')();

app.listen(PORT, () => console.log('App is up'));
