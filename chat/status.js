var io = require("./server");
var stable = require("./stable")
console.log("Server running!")
io.on('connection', function(socket){
	console.log("On connection");
	socket.on('seen',function(coming_id){
		console.log("Received request");
		var online = stable.has(Number(coming_id));
		socket.emit('status',{id: coming_id, status: online});
	})
})
