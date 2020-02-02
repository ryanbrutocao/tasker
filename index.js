const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require("./server/config/keys.js");


const app = express();


mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});