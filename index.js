
const express = require('express');
const mongoose = require('mongoose');
const keys = require("./server/config/keys.js");

const bodyParser = require('body-parser');

// IMPORT MODELS
require('./models/Product');

const app = express();

// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`);
mongoose.connect(keys.mongoURI);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//IMPORT ROUTES
require('./routes/productRoutes')(app);
//generates a new application that represents a running express app
const routes = require("./routes/productRoutes");
app.use(routes);

// This will redirect all the requests to our frontend application, unless we specify any route before this code.
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}
//  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});