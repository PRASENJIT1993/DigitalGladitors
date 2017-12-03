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

const Notification = (props) => {
  const { notificationList } = props;
  const styles = {
    paper: {
      minHeight: 344,
      padding: 10
    },
  };

  const getBackGroundColour = (alertType) => {
    let returnType = green500;
    if (alertType) {
      if (alertType === "High") {
        returnType = red400;
      } else if (alertType === "Medium") {
        returnType = yellow600
      } else {
        returnType = green500
      }
    }
    return returnType;
  }

  return (
    <Paper style={styles.paper}>
      <div className="row">
        <List>
          <Subheader inset={true}><h2>{"Notifications"}</h2></Subheader>
          {notificationList.map((item, index) => (
            <ListItem
              key={index}
              leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={getBackGroundColour(item.alertType)} />}
              rightIcon={<ActionInfo />}
              primaryText={`${item.patientId} - ${item.alertDescription}`}
              secondaryText={item.alertReason}
            />
          ))}
        </List>
      </div>
    </Paper>
  );
};

export default Notification;