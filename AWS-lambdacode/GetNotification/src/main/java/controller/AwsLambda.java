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
import model.NotificationModel;
import model.NotificationInput;


public class AwsLambda {
	
	public static void main(String args[]){
		NotificationInput doctorinfo = new NotificationInput();
		doctorinfo.setUserId("doctor1");
		doctorinfo.setUserType("doctor");
		AwsLambda awsLambda=new AwsLambda();
		System.out.println(awsLambda.handleRequest(doctorinfo ,null));
		
	}
	
	
	public  Object handleRequest(NotificationInput input, Context arg1) {
		
		System.out.println(input.toString());
		AmazonDynamoDBClient client = new AmazonDynamoDBClient().withRegion(Regions.US_EAST_1);
		ArrayList<NotificationModel> notificationList =new ArrayList<NotificationModel>();			
		try{
			String id=input.getUserId();
			String userType = input.getUserType();
			String tableName = KeyConstant.NOTIFICATION_TABLE_NAME;	      
		        Map<String, AttributeValue> expressionAttributeValues = new HashMap<String, AttributeValue>();
				expressionAttributeValues.put(":userType", new AttributeValue().withS(userType));
				expressionAttributeValues.put(":userId", new AttributeValue().withS(id)); 
				Map<String, String> expression = new HashMap<String, String>();
				expression.put("#userType", "userType");	
				expression.put("#userId", "userId");	

			 ScanRequest scanRequest = new ScanRequest()
					    .withTableName(tableName).withFilterExpression("#userType = :userType and #userId = :userId")
					    .withExpressionAttributeValues(expressionAttributeValues)
					    .withExpressionAttributeNames(expression);		
				
			 ScanResult result = client.scan(scanRequest);											
				
				for (Map<String, AttributeValue> item : result.getItems()){	
					
					NotificationModel notification	= new NotificationModel();
					notification.setAlertDescription(item.get("alertDescription").getS());
					notification.setAlertId(item.get("alertId").getS());
					notification.setAlertReason(item.get("alertReason").getS());
					notification.setAlertSeen(item.get("alertSeen").getS());
					notification.setAlertTimestamp(item.get("alertTimestamp").getS());			
					notification.setAlertType(item.get("alertType").getS());
					notification.setUserId(item.get("userId").getS());
					notification.setUserType(item.get("userType").getS());
					notification.setPatientId(item.get("patientId").getS());
					
					notificationList.add(notification);
				}																		
				
	
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
		return notificationList;
	}
	
	

}
