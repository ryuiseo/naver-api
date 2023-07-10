require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const logger = require('morgan');
const http = require('http');

const app = express();

const shoppingRouter = require('./routes/shopping');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // 중첩 객체 표현

app.use('/shopping', shoppingRouter);
const server = http.createServer(app);

server.listen(3000, () => console.log(`server is running on port 3000`));

module.exports = server;
