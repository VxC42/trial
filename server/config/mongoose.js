const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const reg = new RegExp('\\.js$', 'i');

mongoose.connect('mongodb://localhost/bucketDB');
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

mongoose.Promise = global.Promise;

const modelsPath = path.join(__dirname, './../models');

fs.readdirSync(modelsPath).forEach(model => {
  if (reg.test(model)) {
    require(path.join(modelsPath, model));
  }
});
