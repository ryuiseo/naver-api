require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const http = require('http');

const app = express();
const port = process.env.PORT || 3000;
const shoppingRouter = require('./routes/shopping');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/shopping', shoppingRouter);
const server = http.createServer(app);

server.listen(port, () => console.log(`port is running on port ${port}`));
