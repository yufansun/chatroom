var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const EVENT_NAMES = require('../../constants/eventConstants.js');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// tell the server to find something in public

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function(req, res){
  	res.sendFile(__dirname + '/index.html');
  	console.log("index.html sent")
});

/*---------------------------------------------------------------------------*/

var contactStatus1 = [
	{id:1, contactName:"Harry Potter", contactStatus: "offline"},
	{id:2, contactName:"Ron Weasley", contactStatus: "offline"}
];

var contactStatus2 = [
	{id:2, contactName:"Ron Weasley", contactStatus: "online"}
];
var msg = {user:"yufan", text: "hello"};

io.on('connection', function(socket){
	console.log("On connection");
	socket.on(EVENT_NAMES.CREATE_NEW_USER, function(name){
		console.log(name);
		socket.emit(EVENT_NAMES.SEND_RECENT_CONTACTS, contactStatus1);
		console.log("Initial status sent");
		socket.emit(EVENT_NAMES.UPDATE_STATUS, contactStatus2);
		console.log("Update status sent");
		socket.emit(EVENT_NAMES.FORWARD_MESSAGE, msg);
		console.log("Update status sent");
	});
});
