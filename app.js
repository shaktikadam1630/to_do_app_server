
const express = require('express');
const app = express();
const body_parser=require('body-parser');
const userRouter=require('./routers/user.routers');

app.use(body_parser.json());
app.use('/',userRouter);
module.exports = app;