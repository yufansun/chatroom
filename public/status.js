var io = require("./server");
var stable = require("./stable")
console.log("Server running!")
io.on('connection', function(socket){
	console.log("On connection");
	socket.emit('initial',{id: 1, Name: "Ren Lu",Status: "true"});
	socket.on('seen',function(coming_id){
		console.log("Received request");
		console.log("From "+coming_id);
		var online = stable.has(Number(coming_id));
		socket.emit('initialStatus',{id: 0, Name: "Yufan",Status: "true"});
		socket.emit('updateStatus',{id: 0, Name:"Yufan",Status: "false"});
	})
	socket.on('1',function(Name){
		console.log("1: "+Name);
	})
})

