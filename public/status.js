var io = require("./server");
var stable = require("./stable")
console.log("Server running!")
var contactStatus = [
  {id: 1, Name: "Yufan Sun", Status: "true"},
  {id: 2, Name: "Qinye Li", Status: "false"},
  {id: 3, Name: "Yanda Huang", Status: "true"},
  {id: 4, Name: "Shengjie Pan", Status: "false"},
  {id: 5, Name: "Shuoyang Cui", Status: "false"}
];
io.on('connection', function(socket){
	console.log("On connection");
	//socket.emit('initial',{id: 1, Name: "Ren Lu",Status: "true"});
	socket.on('myID',function(name){
		console.log("Received request from "+name);
		socket.emit('initialStatus',contactStatus);
		console.log("Initial Status sent!")
	});
	socket.on('chat message',function(msg){
		//msg has key, user and text properties
		console.log("Received chat message: "+msg.text);
	});
});

