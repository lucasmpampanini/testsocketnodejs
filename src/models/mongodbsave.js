const Image = require('../models/image')

async function saveUrlImg(urlBase, urlImage) {
        return new Image({
            urlBase,
            urlImage,
        }).save()
}

module.exports = saveUrlImg;