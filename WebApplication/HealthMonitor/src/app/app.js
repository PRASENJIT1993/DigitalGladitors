import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppRoutes from './routers/routes';
import store from './store/store';
//import Paho from 'paho-mqtt';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render

const App = () => (
  <Provider store={store}>
    <Router history={hashHistory} >
      {AppRoutes}
    </Router>
  </Provider>
);

//mqtt code for subscribe
/*var client;
function startMQTTSocket() {
  console.log("startMQTT");
  client = new Paho.MQTT.Client("wss://iot.eclipse.org", "clientId_ubisense" + Math.floor(Math.random() * 1000) + 1);//random client id
  client.onMessageArrived = onMessageArrived;
  client.connect({ onSuccess: onConnect });
}

function onMessageArrived(message) {
  console.log(message.payloadString);
  //handleMQTTMessageDynamic(message.payloadString);
  //handleMQTTMessage(message.payloadString);
  //console.log("payload "+JSON.stringify(message.payloadString));        
}

function onConnect() {
  // Once a connection has been made, make a subscription
  console.log("onConnect");
  //client.subscribe("awsiotbridge");
  //client.subscribe("workersafety/points");
  client.subscribe("Panic");
}
startMQTTSocket();*/
ReactDOM.render(<App />, document.getElementById('app'));
