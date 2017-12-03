import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { green500, yellow600, red400 } from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/account-balance';
import InfoBox from '../../components/InfoBox';
import NewOrders from '../../components/NewOrders';
import MonthlySales from '../../components/MonthlySales';
import globalStyles from '../../styles.scss';
import Data from '../../data/data';

const DoctorReports = (props) => {
  const { notificationList } = props;
  const styles = {
    paper: {
      minHeight: 344,
      padding: 10
    },
  };

  return (
    <Paper style={styles.paper}>
      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={ShoppingCart}
            color={pink600}
            title="Total Number of Patients"
            value="15"
          />
        </div>


        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={ThumbUp}
            color={cyan600}
            title="Total Number of Discharged Patient"
            value="4231"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Assessment}
            color={purple600}
            title="Awaiting Appointments"
            value="460"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Face}
            color={orange600}
            title="New Members"
            value="7"
          />
        </div>
      </div>

      <div className="row">
        {/* <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <NewOrders data={Data.dashBoardPage.newOrders} />
          </div> */}

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
          <MonthlySales text={"Monthly Reports on Patients"} data={Data.dashBoardPage.monthlySales} />
        </div>
      </div>
    </Paper>
  );
};

export default DoctorReports;