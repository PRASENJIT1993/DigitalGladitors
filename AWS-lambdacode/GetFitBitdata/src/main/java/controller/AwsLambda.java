package controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ScanRequest;
import com.amazonaws.services.dynamodbv2.model.ScanResult;
import com.amazonaws.services.lambda.runtime.Context;
import constant.KeyConstant;
import model.FitBit;



public class AwsLambda {
	
	public static void main(String args[]){
		FitBit doctorinfo = new FitBit();
		doctorinfo.setPatientId("patient1");	
		AwsLambda awsLambda=new AwsLambda();
		System.out.println(awsLambda.handleRequest(doctorinfo ,null));
		
	}
	
	
	public  Object handleRequest(FitBit input, Context arg1) {
		
		System.out.println(input.toString());
		AmazonDynamoDBClient client = new AmazonDynamoDBClient().withRegion(Regions.US_EAST_1);
		ArrayList<FitBit> notificationList =new ArrayList<FitBit>();			
		try{
			String id=input.getPatientId();
			String tableName = KeyConstant.FITBIT_TABLE_NAME;	      
		        Map<String, AttributeValue> expressionAttributeValues = new HashMap<String, AttributeValue>();
				expressionAttributeValues.put(":patientId", new AttributeValue().withS(id)); 
				Map<String, String> expression = new HashMap<String, String>();	
				expression.put("#patientId", "patientId");	

			 ScanRequest scanRequest = new ScanRequest()
					    .withTableName(tableName).withFilterExpression("#patientId = :patientId")
					    .withExpressionAttributeValues(expressionAttributeValues)
					    .withExpressionAttributeNames(expression);		
				
			 ScanResult result = client.scan(scanRequest);											
				
				for (Map<String, AttributeValue> item : result.getItems()){	
					System.out.println("item "+item);
					 	
					FitBit fitBit	= new FitBit();
					fitBit.setBmi(item.get("bmi").getS());
					fitBit.setBpm(item.get("bpm").getS());
					fitBit.setCount(item.get("count").getS());
					fitBit.setDatetime(item.get("datetime").getS());
					fitBit.setIsMainSleep(item.get("isMainSleep").getS());			
					fitBit.setLevel(item.get("level").getS());
					fitBit.setMinutes(item.get("minutes").getS());
					fitBit.setPatientId(item.get("patientId").getS());
					fitBit.setPerson_type(item.get("person_type").getS());
					fitBit.setSteps(item.get("steps").getS());
					fitBit.setCalories(item.get("calories").getS());
					
					
					notificationList.add(fitBit);
				}																		
				
	
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
		return notificationList;
	}
	
	

}
