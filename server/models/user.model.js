const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the schema
const UserSchema = new Schema({
          name: {type: String, unique: true, trim:true, required:true},
          goals: Array
     });

// register the schema as a model
mongoose.model('User', UserSchema);
