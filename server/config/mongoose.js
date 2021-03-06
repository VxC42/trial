const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
mongoose.Promise = global.Promise;

const promise = mongoose.connect('mongodb://localhost/bucketDB', {
     useMongoClient: true
});

promise.then(
    ()=>{console.log('connected to mongodb')}
);

const models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
});
