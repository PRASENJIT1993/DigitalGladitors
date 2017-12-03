# MQTT Client demo
# Continuously monitor two different MQTT topics for data,
# check if the received data matches two predefined 'commands'
 
import paho.mqtt.client as mqtt
import RPi.GPIO as GPIO
import json
# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
 
    # Subscribing in on_connect() - if we lose the connection and
    # reconnect then subscriptions will be renewed.
    client.subscribe("Bulb")
  #  client.subscribe("10616100_rp_02")
   # client.subscribe("10616100_rp_03")
   # client.subscribe("10616100_rp_04")
   # client.subscribe("CoreElectronics/topic")
 
# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))
    j = json.loads(str(msg.payload))
    print j['deviceId']
    print j['value']
    if j['deviceId'] == "11" :
        if j['value'] == "0":
            print(" led 11 off")
            GPIO.output(11, True)
        elif j['value'] == "1":   
            print(" led 11 on")
            GPIO.output(11, False)
    #if msg.payload == "green":
        #print(" pin 11 on!")
        #GPIO.output(11, True)
        #print("Received message #1, do something")
        # Do something
    #else:
        #print("pin 11 off!")
        #GPIO.output(11, False)
    if j['deviceId'] == "12":
        if j['value'] == "0":
            print(" led 12 off")
            GPIO.output(11, True)
        elif j['value'] == "1":   
            print(" led 12 on")
            GPIO.output(12, False)    
    #if msg.payload == "red":
    #    print(" pin 12 on!")
    #    GPIO.output(12, True)
        #print("Received message #1, do something")
        # Do something
    #  else:
    #    print("pin 12 off!")
     #   GPIO.output(12, False)
    if msg.payload == "3":
        print(" pin 13 on!")
        GPIO.output(13, True)
        #print("Received message #1, do something")
        # Do something
    else:
        print("pin 13 off!")
        GPIO.output(13, False)
    if msg.payload == "4":
        print(" pin 14 on!")
        #GPIO.output(14, True)
        #print("Received message #1, do something")
        # Do something
    else:
        print("pin 14 off!")
        #GPIO.output(14, False)   
 
# Create an MQTT client and attach our routines to it.
client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
#client.on_publish = on_publish
#client.on_subscribe = on_subscribe
 
client.connect("iot.eclipse.org", 1883, 60)


GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT)
GPIO.setup(12, GPIO.OUT)
GPIO.setup(13, GPIO.OUT)
GPIO.setup(15, GPIO.OUT)
# Process network traffic and dispatch callbacks. This will also handle
# reconnecting. Check the documentation at
# https://github.com/eclipse/paho.mqtt.python
# for information on how to use other loop*() functions
client.loop_forever()
