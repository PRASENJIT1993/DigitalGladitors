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
import model.PatientList;
import model.doctormodel;


public class AwsLambda {
	
	public  Object handleRequest(doctormodel input, Context arg1) {
		
		System.out.println(input.toString());
		AmazonDynamoDBClient client = new AmazonDynamoDBClient().withRegion(Regions.US_EAST_1);
		ArrayList<PatientList> patientAssigned =new ArrayList<PatientList>();			
		try{
			String id=input.getDoctorId();
			String tableName = KeyConstant.PATIENT_TABLE_NAME;	      
		        Map<String, AttributeValue> expressionAttributeValues = new HashMap<String, AttributeValue>();
				expressionAttributeValues.put(":doctorId", new AttributeValue().withS(id)); 
				Map<String, String> expression = new HashMap<String, String>();
				expression.put("#doctorId", "doctorId");	

			 ScanRequest scanRequest = new ScanRequest()
					    .withTableName(tableName).withFilterExpression("#doctorId = :doctorId")
					    .withExpressionAttributeValues(expressionAttributeValues)
					    .withExpressionAttributeNames(expression);		
				
			
			 ScanResult result = client.scan(scanRequest);											
				
				for (Map<String, AttributeValue> item : result.getItems()){	
					PatientList patientList	 = new PatientList();
					patientList.setDoctorId(item.get("doctorId").getS());
					patientList.setPatientId(item.get("patientId").getS());
					patientList.setPatientName(item.get("patientName").getS());
					patientList.setAge(item.get("age").getS());
					patientList.setBloodGroup(item.get("bloodGroup").getS());
					patientList.setSex(item.get("sex").getS());
					patientList.setPatientStatus(item.get("patientStatus").getS());				
					patientAssigned.add(patientList);
				}																		
				
	
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
		return patientAssigned;
	}
	
	

}
