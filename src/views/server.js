const express = require('express');
const path = require('path'); 
 
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
module.exports = io; 

app.use(express.static(path.join(__dirname)));
app.set('views', path.join(__dirname));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
 
app.use('/', (req, res) => {
    res.render('index.html');
});

socketView = require('./view')

server.listen(3000);