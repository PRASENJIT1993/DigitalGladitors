import React from 'react';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import colorReset from 'material-ui/svg-icons/editor/format-color-reset';
import walk from 'material-ui/svg-icons/maps/directions-walk';
import accessibility from 'material-ui/svg-icons/action/accessibility';
import bulb from 'material-ui/svg-icons/action/lightbulb-outline';
import favorite from 'material-ui/svg-icons/action/favorite';
import InfoBox from '../../components/InfoBox';
import NewOrders from '../../components/NewOrders';
import MonthlySales from '../../components/MonthlySales';
import BrowserUsage from '../../components/BrowserUsage';
import RecentlyProducts from '../../components//RecentlyProducts';
import globalStyles from '../../styles.scss';
import Data from '../../data/data';
import { yellow300, yellow600 } from 'material-ui/styles/colors';

const PatientDash = (props) => {
  const { patientData } = props;
  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={walk}
            color={pink600}
            title="Total Steps Count"
            value={patientData && patientData.steps ? patientData.steps : "2476"}
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={colorReset}
            color={cyan600}
            title="Total Calories Burned"
            value={patientData && patientData.calories ? patientData.calories : "150"}
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={favorite}
            color={purple600}
            title="Heart Rate"
            value={patientData && patientData.bpm ? patientData.bpm : "74"}
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={accessibility}
            color={orange600}
            title="Sleeping Hours"
            value={patientData && patientData.minutes ? patientData.minutes : "6"}
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={bulb}
            color={yellow600}
            title="Bulb"
            value={"Click on Bulb icon to switch on/off the bulb."}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
          <MonthlySales text={"Monthly Wise Steps Count"} data={Data.dashBoardPage.monthlySteps} />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <RecentlyProducts text={"Recent Doctor Appointments"} data={Data.dashBoardPage.recentProducts} />
        </div>
      </div>
    </div>
  );
};

export default PatientDash;