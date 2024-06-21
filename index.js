const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 3001;

app.get('/', (req, res) => {
    res.send("hello world");
})

io.on('connected', socket => {
    console.log("someone connected");
    socket.on('join-room', ({ roomId, userName }) => {
        console.log("user joined the room");
        console.log(roomId);
        console.log(userName);
    })
})

server.listen(port, () => {
    console.log(`this app is listening on port: ${port}`);
})
