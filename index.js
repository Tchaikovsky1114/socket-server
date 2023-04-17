const http = require('http');
const server = require('socket.io');
const namespaces = require('./data/namespaces');

const httpServer = http.createServer();
const io = new server.Server(httpServer,{});

io.on("connection", (socket) => {
  console.log('connect');
  
  socket.emit('nsList',namespaces);
})

namespaces.forEach((namespace) => {
  io.of(namespace.endpoint).on('connection', (socket) => {
    socket.on('joinRoom', async(roomObj, ackCallback) => {
      const thisNs = namespaces[roomObj.namespaceId];
      const thisRoomObj = thisNs.rooms.find(room => room.roomTitle === roomObj.roomTitle);
      const thisRoomHistory = thisRoomObj.history;

      const rooms = socket.rooms;

      let i = 0;
      rooms.forEach(room => {
        if(i !== 0) {
          socket.leave(room);
        }
        i++
      })
      socket.join(roomObj.roomTitle);
      
      const sockets = await io.of(namespace.endpoint).in(roomObj.roomTitle).fetchSockets();
      const socketCount = sockets.length;
      ackCallback({numUsers:socketCount, thisRoomHistory})
      
    })

    socket.on('newMessageToRoom',(messageObj) => {
      console.log(messageObj);
      const rooms = socket.rooms;
      const currnetRoom = [...rooms][1];
      io.of(namespace.endpoint).in(currnetRoom).emit('messageToRoom',messageObj);

      const thisNs = namespaces[messageObj.selectedNsId];
      const thisRoom = thisNs.rooms.find((room) => room.roomTitle === currnetRoom);
      thisRoom.addMessage(messageObj);
    })
  })
})


httpServer.listen(9000);