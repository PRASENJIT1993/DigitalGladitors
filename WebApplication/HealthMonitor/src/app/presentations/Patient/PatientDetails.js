import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import { grey400 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

const PatientDetails = (props) => {
  const { patientDetails } = props;
  const styles = {
    paper: {
      minHeight: 344,
      padding: 10
    },
    toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  };

  return (
    <Paper style={styles.paper}>
      <TextField
        hintText="Name"
        floatingLabelText="Name"
        fullWidth={true}
        value={patientDetails && patientDetails.patientName ? patientDetails.patientName : ''}
      />
      <TextField
        hintText="Age"
        floatingLabelText="Age"
        fullWidth={true}
        value={patientDetails && patientDetails.age ? patientDetails.age : ''}
      />
      <TextField
        hintText="Mobile Number"
        floatingLabelText="Mobile Number"
        fullWidth={true}
        value={patientDetails && patientDetails.phoneNumber ? patientDetails.phoneNumber : ''}
      />
      <TextField
        hintText="Emergency Contact Number"
        floatingLabelText="Emergency Contact Number"
        fullWidth={true}
        value={patientDetails && patientDetails.emergencyContact ? patientDetails.emergencyContact : ''}
      />
      <TextField
        hintText="Email ID"
        floatingLabelText="Email ID"
        fullWidth={true}
        value={patientDetails && patientDetails.emergencyEmailId ? patientDetails.emergencyEmailId : ''}
      />
      <TextField
        hintText="Area of Symptoms"
        floatingLabelText="Area of Symptoms"
        fullWidth={true}
        value={patientDetails && patientDetails.mainAreasOfSymptoms ? patientDetails.mainAreasOfSymptoms : ''}
      />
      <TextField
        hintText="Date of Birth"
        floatingLabelText="Date of Birth"
        fullWidth={true}
        value={patientDetails && patientDetails.dateOfBirth ? patientDetails.dateOfBirth : ''}
      />
      <TextField
        hintText="Address"
        floatingLabelText="Address"
        fullWidth={true}
        value={patientDetails && patientDetails.address ? patientDetails.address : ''}
      />
      <TextField
        hintText="Reason For Visit"
        floatingLabelText="Reason For Visit"
        fullWidth={true}
        value={patientDetails && patientDetails.reasonForVisit ? patientDetails.reasonForVisit : ''}
      />
    </Paper>
  );
};

export default PatientDetails;