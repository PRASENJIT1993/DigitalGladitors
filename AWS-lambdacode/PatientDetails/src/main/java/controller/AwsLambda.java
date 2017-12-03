package controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ScanRequest;
import com.amazonaws.services.dynamodbv2.model.ScanResult;
import com.amazonaws.services.lambda.runtime.Context;
import constant.KeyConstant;

import model.PatientDetail;


public class AwsLambda {
	
	
	public  Object handleRequest(PatientDetail input, Context arg1) {
		
		System.out.println(input.toString());
		AmazonDynamoDBClient client = new AmazonDynamoDBClient().withRegion(Regions.US_EAST_1);
		ArrayList<PatientDetail> patientDetailList =new ArrayList<PatientDetail>();			
		try{
			String id=input.getPatientId();
			
			String tableName = KeyConstant.PATIENT_DETAIL_TABLE_NAME;	      
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
					
					PatientDetail patientDetail	= new PatientDetail();
					patientDetail.setAccident(item.get("accident").getS());
					patientDetail.setAddress(item.get("address").getS());
					patientDetail.setAge(item.get("age").getS());
					patientDetail.setDateOfBirth(item.get("dateOfBirth").getS());
					patientDetail.setEmergencyContact(item.get("emergencyContact").getS());
					patientDetail.setEmergencyEmailId(item.get("emergencyEmailId").getS());
					patientDetail.setMainAreasOfSymptoms(item.get("mainAreasOfSymptoms").getS());
					patientDetail.setPatientId(item.get("patientId").getS());
					patientDetail.setPatientName(item.get("patientName").getS());
					patientDetail.setPhoneNumber(item.get("phoneNumber").getS());
					patientDetail.setReasonForVisit(item.get("reasonForVisit").getS());															
					patientDetailList.add(patientDetail);
				}																		
				
	
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
		return patientDetailList;
	}
	
}
