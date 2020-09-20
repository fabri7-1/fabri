  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  
  var options = {
   useSSL: false,
    userName: "crisfabri24@gmail.com",
    password: "123456789",
    onSuccess:onConnect,
    onFailure:doFail
  }

  
  client.connect(options);
   
  
  function onConnect() {
    
    console.log("Conectado...");
    client.subscribe("crisfabri24@gmail.com/pagina");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "crisfabri24@gmail.com/proteus";
    client.send(message);

	
  }

  function doFail(e){
    console.log(e);
	
  }

  
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  
  function onMessageArrived(message) {
    console.log("Nuevo mensaje:"+message.payloadString); 
	document.getElementById("sensor1").innerHTML=message.payloadString.split("=")[1];
	document.getElementById("sensor2").innerHTML=message.payloadString.split("=")[2];
    
  }


