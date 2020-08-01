const localFileImg = require("../models/localFileImg");

module.exports = function controller(urlImg, urlBase, socket) {

    for (var i = 0; i < urlImg.length; i++) {
        if (urlImg[i] != null) {
            if ( urlImg[0].indexOf("http") !== -1) {
                localFileImg(urlImg[i], i, urlBase, socket)
                console.log(urlImg[i], i)
            }
            
        }
    }
};