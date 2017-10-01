const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create the schema
const ItemSchema = new Schema({
    user: String,
    title: String,
    description: String,
    completed: Boolean,
}, {timestamps: true});

// register the schema as a model
mongoose.model('Item', ItemSchema);
