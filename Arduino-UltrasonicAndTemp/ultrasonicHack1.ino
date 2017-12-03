#include <ArduinoJson.h>
#include "DHT.h"

DHT dht;

const int trigPin = 11;
const int echoPin = 12;
// defines variables
long duration;
int distance;
void setup() {
pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
pinMode(echoPin, INPUT); // Sets the echoPin as an Input
Serial.begin(9600); // Starts the serial communication

dht.setup(2);
}
void loop() 
{
   StaticJsonBuffer<200> jsonBuffer;
     JsonObject& root = jsonBuffer.createObject();
       JsonObject& root1 = jsonBuffer.createObject();
         JsonObject& root2 = jsonBuffer.createObject();
           JsonObject& root3 = jsonBuffer.createObject();
   delay(dht.getMinimumSamplingPeriod());

  float humidity = dht.getHumidity();
  float temperature = dht.getTemperature();

  //Serial.print(dht.getStatusString());
  //Serial.print("\t");
     //int hum=(humidity, 1);
     Serial.print("humidity:");
     Serial.println(humidity);
     delay(1000);
    // root["deviceId"] ="patient";
    //  root["patientId"] ="patient1";
 // root["humidity"] =humidity;
     //  root.prettyPrintTo(Serial);
      Serial.print("temperatureC:");
      Serial.println(temperature);
      delay(1000);
//root1["deviceId"] ="patient";
    //  root1["patientId"] ="patient1";
   //  root.prettyPrintTo(Serial);
   //  root["deviceId"] ="patient";
 // root["temperatureC"] =temperature;
       //  root1.prettyPrintTo(Serial);

 // root.prettyPrintTo(Serial);
  //Serial.print("\t\t");
 // Serial.println(temperature, 1);
  //Serial.print("\t\t");
  Serial.print("temperatureF:");
  Serial.println(dht.toFahrenheit(temperature), 1);
  delay(1000);
 // root["deviceId"] ="patient";
 //root2["deviceId"] ="patient";
      //root2["patientId"] ="patient1";
   //root["temperatureF"] =dht.toFahrenheit(temperature);
   // root2.prettyPrintTo(Serial);
// Clears the trigPin
digitalWrite(trigPin, LOW);
delayMicroseconds(2);
// Sets the trigPin on HIGH state for 10 micro seconds
digitalWrite(trigPin, HIGH);
delayMicroseconds(10);
digitalWrite(trigPin, LOW);
// Reads the echoPin, returns the sound wave travel time in microseconds
duration = pulseIn(echoPin, HIGH);
// Calculating the distance
distance= duration*0.034/2;
// Prints the distance on the Serial Monitor
Serial.print("Distance: ");
Serial.println(distance);
// root["deviceId"] ="patient";
//root3["deviceId"] ="patient";
  //    root3["patientId"] ="patient1";
//root["distance"] =distance;
   // root.prettyPrintTo(Serial);


delay(2000);
}
