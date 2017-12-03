package model;

public class NotificationModel {
	 String alertDescription;
	 String alertId;
	 String alertReason;
	 String alertSeen;
	 String alertTimestamp;
	 String alertType;
	 String userId;
	 String userType;
	 String patientId;
	 
	 
	public String getPatientId() {
		return patientId;
	}
	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}
	public String getAlertDescription() {
		return alertDescription;
	}
	public void setAlertDescription(String alertDescription) {
		this.alertDescription = alertDescription;
	}
	public String getAlertId() {
		return alertId;
	}
	public void setAlertId(String alertId) {
		this.alertId = alertId;
	}
	public String getAlertReason() {
		return alertReason;
	}
	public void setAlertReason(String alertReason) {
		this.alertReason = alertReason;
	}
	public String getAlertSeen() {
		return alertSeen;
	}
	public void setAlertSeen(String alertSeen) {
		this.alertSeen = alertSeen;
	}
	public String getAlertTimestamp() {
		return alertTimestamp;
	}
	public void setAlertTimestamp(String alertTimestamp) {
		this.alertTimestamp = alertTimestamp;
	}
	public String getAlertType() {
		return alertType;
	}
	public void setAlertType(String alertType) {
		this.alertType = alertType;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
}
