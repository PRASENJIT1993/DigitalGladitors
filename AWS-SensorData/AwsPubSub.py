import paho.mqtt.client as paho
import os
import socket
import ssl
import serial
from time import sleep
from random import uniform
from datetime import date, datetime
import json
connflag = False
import RPi.GPIO as GPIO

def on_connect(client, userdata, flags, rc):
    global connflag
    connflag = True
    print("msg sent: temperature4 " )
    print("Connection returned result: " + str(rc) )
    client.subscribe("Bulb",1)
def on_message(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))
    j = json.loads(str(msg.payload))
    print j['deviceId']
    print j['value']
    if j['deviceId'] == "11" :
        if j['value'] == "1":
            print(" led 11 on")
            GPIO.output(11, True)
        elif j['value'] == "0":   
            print(" led 11 off")
            GPIO.output(11, False)
#def on_log(client, userdata, level, buf):
# print(msg.topic+" "+str(msg.payload))
print("msg sent: temperature3 " )
mqttc = paho.Client()
mqttc.on_connect = on_connect
mqttc.on_message = on_message
GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT)
#mqttc.subscribe("topic", 1, on_message)
#mqttc.on_log = on_log
awshost = "ags5m8pmy8se.iot.us-east-1.amazonaws.com"
awsport = 8883
clientId = "RaspberryPi"
thingName = "RaspberryPi"
caPath = 'aws-iot-rootCA.crt'
certPath = '5f98ab2b5b-certificate.pem.crt'
keyPath = '5f98ab2b5b-private.pem.key'
print("msg sent: temperature2 " )
mqttc.tls_set(caPath, certfile=certPath, keyfile=keyPath,cert_reqs=ssl.CERT_REQUIRED, tls_version=ssl.PROTOCOL_TLSv1_2, ciphers=None)
#mqttc.tls_set( certfile=certPath, keyfile=keyPath)
mqttc.connect(awshost, awsport, keepalive=60)
mqttc.loop_start()
while 1==1:
    sleep(10)
    if connflag == True:
         ser=serial.Serial('/dev/ttyUSB0',9600)
         while True:
            read_Serial=ser.readline()
            sleep(1);
            #print read_Serial
        # now = datetime.utcnow()
        # now_str = now.strftime('%Y-%m-%dT%H:%M:%SZ') #e.g. 2016-04-18T06:12:25.877Z
            payload = read_Serial
            mqttc.publish("patientDevice",payload, qos=1)
            print("msg sent: temperature " )
    else:
        print("waiting for connection...")
