//https://www.eclipse.org/paho/clients/js/


// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "iatorres@hotmail.es",
    password: "israel123torres",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado.....");
    client.subscribe("iatorres@hotmail.es/test");
	message=new Paho.MQTT.Message("Servidor NTP");
	message.destinationName=("iatorres@hotmail.es/test1");
	client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    Mensaje=message.payloadString;
	console.log(Mensaje);
	 S1=document.getElementById("Sensor")
	 S2=document.getElementById("Sensor1")
	 S3=document.getElementById("Sensor2")
	 S1.innerHTML="Hora:"+Mensaje.split(".")[0];
     S2.innerHTML="Minutos:"+Mensaje.split(".")[1];
	 S3.innerHTML="Segundos:"+Mensaje.split(".")[2];
  }
  }

