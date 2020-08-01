const mongodbsave = require('./mongodbsave')

function save_imgAwsS3(urlfileImg, urlBase, socket) {
    var AWS = require('aws-sdk')
    const fs = require('fs')
    const path = require("path");

    const BUCKET = 'YOU-BUCKET'
    const REGION = 'YOU-REGION'
    const ACCESS_KEY = 'YOU-ACCESS_KEY'
    const SECRET_KEY = 'YOU-SECRET_KEY'

    const localImage = urlfileImg
    const imageRemoteName = `${urlfileImg}.png`

    AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
    region: REGION
    })

    var s3 = new AWS.S3()

    s3.putObject({
    Bucket: BUCKET,
    ACL: 'public-read',
    Body: fs.readFileSync(path.resolve('../views', localImage)),
    Key: imageRemoteName
    })
    .promise()
    .then(response => {
        console.log(`done! - `, response)
        console.log(`The URL is ${s3.getSignedUrl('getObject', { Bucket: BUCKET, Key: imageRemoteName })}`)
        mongodbsave(urlBase, `${urlfileImg}.png`)
        const data = {urlImage: `https://${BUCKET}.s3.${REGION}.amazonaws.com/${urlfileImg}.png`}
        socket.emit('srcImage', data)
    })
    .catch(err => {
        console.log('failed:', err)
    })
}

module.exports = save_imgAwsS3;