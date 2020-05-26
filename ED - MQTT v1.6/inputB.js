// SETUP MQTT ------------------------------------------

const broker = "influx.itu.dk";
const port = 9002;
const secured = true;
const topic = "ituF2020/EXPD/arje";
const myID = "id" + parseInt(Math.random() * 100000, 10);




// CONNECT ----------------------------------------------

let mqttClient = new Paho.MQTT.Client(broker, port, myID);

mqttClient.connect({ onSuccess: onConnect, useSSL: secured });
mqttClient.onConnectionLost = conLost;
mqttClient.onMessageArrived = receiveMessage;

// MQTT Handler functions--------------------------------

function onConnect() {
	mqttClient.subscribe(topic);
	// console.log("Someone has connected");
	sendMQTT("someone connected");
};

function sendMQTT(message) {
	console.log("sending");
	let mOBJ = { deviceID: myID, content: message };
	let mSend = new Paho.MQTT.Message(JSON.stringify(mOBJ));
	mSend.destinationName = topic;
	mqttClient.send(mSend);
};

function receiveMessage(message) {
	let mUnpack = JSON.parse(message.payloadString);
	let senderID = mUnpack.deviceID;
	let receivedMessage = mUnpack.content;

	console.log(receivedMessage);

	//do stuff with the message   
	document.getElementById("light").style.backgroundColor = `hsl(${0},${0}%,${receivedMessage}%,${100})`
}



function conLost() {
	console.log("Lost connection");
}

