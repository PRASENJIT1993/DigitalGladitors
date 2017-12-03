import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { pink500, grey200, grey500 } from 'material-ui/styles/colors';

const PatientListTable = (props) => {

  const styles = {
    paper: {
      minHeight: 344,
      padding: 10
    },
    editButton: {
      fill: grey500
    },
    columns: {
      patientId: {
        width: '20%'
      },
      patientName: {
        width: '50%'
      },
      age: {
        width: '20%'
      },
      bloodGroup: {
        width: '20%'
      },
      sex: {
        width: '20%'
      }
    }
  };
  return (
    <Paper style={styles.paper}>
      <Table onRowSelection={props.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn style={styles.columns.patientId}>ID</TableHeaderColumn>
            <TableHeaderColumn style={styles.columns.patientName}>Patient Name</TableHeaderColumn>
            <TableHeaderColumn style={styles.columns.age}>Age</TableHeaderColumn>
            <TableHeaderColumn style={styles.columns.bloodGroup}>Blood Group</TableHeaderColumn>
            <TableHeaderColumn style={styles.columns.sex}>Sex</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.tableData.map(item =>
            <TableRow key={item.patientId}>
              <TableRowColumn style={styles.columns.patientId}>{item.patientId}</TableRowColumn>
              <TableRowColumn style={styles.columns.patientName}>{item.patientName}</TableRowColumn>
              <TableRowColumn style={styles.columns.age}>{item.age}</TableRowColumn>
              <TableRowColumn style={styles.columns.bloodGroup}>{item.bloodGroup}</TableRowColumn>
              <TableRowColumn style={styles.columns.sex}>{item.sex}</TableRowColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

PatientListTable.propTypes = {
  data: PropTypes.array
};

export default PatientListTable;
