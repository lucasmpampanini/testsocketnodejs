const io = require('./server');
const spider = require('../controllers/spider');

const socketView = io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`);
 
    socket.on('sendUrl', data => {
        console.log(typeof spider);
        console.log(data.urlBase);
        var teste = data.urlBase;
        spider(teste, socket);
    })
});

module.exports = socketView;