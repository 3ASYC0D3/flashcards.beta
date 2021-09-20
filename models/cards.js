const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new mongoose.Schema({
    front: String,
    back: String,
    number: String
});
  
module.exports = mongoose.model('Card', cardSchema);