const express = require('express');
const app = express();
const path = require('path');
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

var http = require('http');
var socketIO = require('socket.io');
var io = socketIO();
var editorSocketService = require('./services/editorSocketService')(io);

// connect mongoDb
const mongoose = require('mongoose');
mongoose.connect('mongodb://user:user123@ds213665.mlab.com:13665/ojtest');

// app.get('/', (req, res) => {
// 	res.send('Hello express world');
// });
app.use('/api/v1', restRouter);

app.use(express.static(path.join(__dirname, '../public')));

// app.listen(3000, function() {
// 	console.log('App listening on port 3000');
// });

const server = http.createServer(app);
io.attach(server);
server.listen(3000);
server.on('listening', function() {
 	console.log('App listening on port 3000');
 });

app.use((req, res) => {
	res.sendFile('index.html', {root: path.join(__dirname, '../public')});
})