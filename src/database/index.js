const connectionString = "mongodb+srv://username:password@cluster0.lkum6.mongodb.net/Image?retryWrites=true&w=majority";

const mongoose = require('mongoose');

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;