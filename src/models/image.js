const mongoose = require('../database');

const ImageSchema = new mongoose.Schema({
    urlBase: {
        type: String
    },
    urlImage: {
        type: String
    }
});

const Image = mongoose.model('Image', ImageSchema)

module.exports = Image;