import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
import ThemeDefault from '../../shared/styles/theme-default';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import LockIcon from 'material-ui/svg-icons/action/lock-outline';
import { blue600, grey900 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import ActionConstants from '../../constants/ActionConstants';
import { Action, navigateToAction, postData } from '../../actions/Action';
import { navigateTo } from '../../utils/NavigationHelper';
import VideoConference from '../../presentations/VideoConference/VideoConference';

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    minWidth: 300,
    color: '#1E88E5'
  },
  avatar: {
    margin: '1em',
    textAlign: 'center ',
  },
  form: {
    padding: '0 1em 1em 1em',
  },
  input: {
    display: 'flex',
  },
  hint: {
    textAlign: 'center',
    marginTop: '1em',
    color: '#ccc',
  },
};

function getColorsFromTheme(theme) {
  if (!theme) return { primary1Color: blue600, accent1Color: blue600 };
  const {
        palette: {
            primary1Color,
    accent1Color,
        },
      } = theme;
  return { primary1Color, accent1Color };
}

class VideoConferencePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actionHandler(navigateToAction(ActionConstants.NAVIGATION_LINK_TEXT.DOCTOR_VIDEO_CONFERENCE_LINK, ActionConstants.NAVIGATION_PAGE_HEADER.DOCTOR_VIDEO_CONFERENCE_HEADER));
  }

  render() {
    const { notificationList } = this.props;
    return (
      <div>
        <VideoConference notificationList={notificationList}
          {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isUserLoggedIn: state.uiState.login.isUserLoggedIn,
    patientList: state.data.current.patientList,
    userId: state.uiState.login.userId,
    userName: state.uiState.login.userName,
    notificationList: state.uiState.patientDetails.notificationList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionHandler(action) {
      dispatch(action);
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(VideoConferencePage));