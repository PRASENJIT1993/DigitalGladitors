package controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.json.JSONObject;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.PutItemOutcome;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.lambda.runtime.Context;
import constant.KeyConstant;

import model.Device;


public class AwsLambda {

	public static void main(String args[]){
		Device doctorinfo = new Device();
		doctorinfo.setDeviceId("11");
		doctorinfo.setValue("1");		
		AwsLambda awsLambda=new AwsLambda();
		System.out.println(awsLambda.handleRequest(doctorinfo ,null));
		
	}
	
	public  Object handleRequest(Device input, Context arg1) {
		
		//System.out.println(input.toString());
		AmazonDynamoDBClient client = new AmazonDynamoDBClient().withRegion(Regions.US_EAST_1);		
		try{
		    MqttClient mqttClient = new MqttClient(KeyConstant.MQTT_URL, MqttClient.generateClientId());
			mqttClient.connect();
		
			JSONObject obj = new JSONObject();
			obj.put("deviceId",input.getDeviceId());
			obj.put("value",input.getValue());			
			MqttMessage message = new MqttMessage();
			message.setPayload(obj.toString().getBytes());
			System.out.println("message "+message);
			mqttClient.publish(KeyConstant.TOPIC, message);
			mqttClient.disconnect();	
					
			String tableName = KeyConstant.DEVICE_TABLE_NAME;
			DynamoDB dynamoDB = new DynamoDB(client);
			Table table = dynamoDB.getTable(tableName);
			Item item = new Item().withPrimaryKey(KeyConstant.DEVICE_ID_KEY, input.getDeviceId()).withString(KeyConstant.DEVICE_VALUE_KEY, input.getValue());
			// Write the item to the table
			PutItemOutcome outcome = table.putItem(item);

		}catch(Exception ex){
			ex.printStackTrace();
		}
		
		return "Success";
	}
	
}
