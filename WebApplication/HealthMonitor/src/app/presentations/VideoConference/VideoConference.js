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

const VideoConference = (props) => {
  const { notificationList } = props;
  const styles = {
    paper: {
      minHeight: 344,
      padding: 10
    },
  };


  return (
    <Paper style={styles.paper}>
      <h2>{"Video Conference"}</h2>
      <div className="row">
        <video class="video-container video-container-overlay" autoplay="" loop="" muted="" data-reactid=".0.1.0.0">
          <source type="video/mp4" data-reactid=".0.1.0.0.0" src="mov_bbb.mp4" />
        </video>
      </div>
    </Paper>
  );
};

export default VideoConference;