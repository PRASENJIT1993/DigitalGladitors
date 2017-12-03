var noble = require('noble');
var KalmanFilter = require('kalmanjs').default;
var Client =require('node-rest-client').Client;

var client =new Client();

var kalmanFilter = new KalmanFilter(2);//new KalmanFilter({R: 0.01, Q: 3});

noble.on('stateChange', function(state) {
    if(state === "poweredOn") {
        noble.startScanning([], true);
    }
});


noble.on('scanStart', function() {
    console.log("Starting to scanning peripheral");
});

noble.on('scanStop', function() {
    console.log("Stopping peripheral scan");
});

noble.on('discover', function(peripheral) {
    if(peripheral.uuid == "209148b346c1") {
    //console.log('Discovering peripheral ' + peripheral.uuid + 'at RSSI: ' + peripheral.rssi);

    var newRssi = kalmanFilter.filter(peripheral.rssi).toFixed(2);
	
    console.log('Discovering peripheral ' + peripheral.uuid + 'at RSSI: ' + newRssi);

var data={ "deviceId": "beacon" , "value": newRssi };
start(data);

function start(event){   
    var awsIot = require('aws-iot-device-sdk');
    var device = awsIot.device({      
		 keyPath: './5f98ab2b5b-private.pem.key',
         certPath:'./certificate.crt',
         caPath: './aws-iot-rootCA.crt',
         clientId: 'RaspberryPi',
         host: 'ags5m8pmy8se.iot.us-east-1.amazonaws.com'
    });
	
    device.on('connect', function () {
            console.log('connected');
            device.publish('topic1', JSON.stringify({ "deviceId": event.deviceId , "value": event.value }));
            console.log('published successfully');
          //device.end();  
        });		
	device.on('disconnect', function() {
         console.log('close');
		
      });
	  
	
}

	}
}
);

/*
function dataPublish(event){
	const AWS = require('aws-sdk');
    const iotData = new AWS.IotData({ endpoint: "ags5m8pmy8se.iot.us-east-1.amazonaws.com",region :"us-east-1" });  
    const params = {
      topic: 'topic1',
      payload: JSON.stringify(event)
    } 
  iotData.publish(params, (err, res) => {
    if (err) console.log("error" +err);
    
    console.log(res);
    return "success";
  });


}
*/

//dataPublish(data);