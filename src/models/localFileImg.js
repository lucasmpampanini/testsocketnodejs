const save_imgAwsS3 = require('./awsS3')

function save_imgLocal(urlImg, contador, urlBase, socket) {
    var fs = require('fs'),
    request = require('request');

    var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
    };

    download(urlImg, `${contador}.png`, function(){
    console.log('doneSaveLocal');
    save_imgAwsS3(`${contador}.png`, urlBase, socket)
    });
    
}

module.exports = save_imgLocal;