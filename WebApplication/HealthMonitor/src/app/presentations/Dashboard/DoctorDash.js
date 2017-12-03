import React from 'react';
import PatientChartGraph from './PatientChartGraph';

export class DoctorDash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <PatientChartGraph {...this.props} />
      </div>
    );
  }
}

