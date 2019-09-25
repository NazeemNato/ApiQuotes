const mongoose = require('mongoose');  
const UserSchema = new mongoose.Schema({  
  quoteText: String,
  quoteAuthor: String
});
mongoose.model('Data', UserSchema);

module.exports = mongoose.model('Data');