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
import { Action, navigateToAction } from '../../actions/Action';

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

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  componentWillMount() {
    this.props.actionHandler(Action(ActionConstants.USER_LOGGED_OUT_SUCCESS));
    this.props.actionHandler(Action(ActionConstants.SET_CURRENT_SELECTED_TAB, ActionConstants.NAVIGATION_PAGE_HEADER.DEFAULT_HEADER));
  }

  loginBtnClick = (e, data, data1) => {
    if (!this.state.username) {
      alert('Please enter username');
      return;
    }
    if (!this.state.password) {
      alert('Please enter password');
      return;
    }
    if (ActionConstants.ADMIN_USERNAME.indexOf(this.state.username) > -1) {
      this.props.actionHandler(navigateToAction(ActionConstants.NAVIGATION_LINK_TEXT.ADMIN_DASHBOARD_LINK, ActionConstants.NAVIGATION_PAGE_HEADER.DASHBOARD_HEADER));
      this.props.actionHandler(Action(ActionConstants.USER_LOGGED_IN_SUCCESS, { userName: ActionConstants.ADMIN_USERNAME_TEXT, userId: this.state.username }))
    }
    else if (ActionConstants.DOCTOR_USERNAME.indexOf(this.state.username) > -1) {
      this.props.actionHandler(navigateToAction(ActionConstants.NAVIGATION_LINK_TEXT.DOCTOR_DASHBOARD_LINK, ActionConstants.NAVIGATION_PAGE_HEADER.DASHBOARD_HEADER));
      this.props.actionHandler(Action(ActionConstants.USER_LOGGED_IN_SUCCESS, { userName: ActionConstants.DOCTOR_USERNAME_TEXT, userId: this.state.username }))
    }
    else if (ActionConstants.PATIENT_USERNAME.indexOf(this.state.username) > -1) {
      this.props.actionHandler(navigateToAction(ActionConstants.NAVIGATION_LINK_TEXT.PATIENT_DASHBOARD_LINK, ActionConstants.NAVIGATION_PAGE_HEADER.DASHBOARD_HEADER));
      this.props.actionHandler(Action(ActionConstants.USER_LOGGED_IN_SUCCESS, { userName: ActionConstants.PATIENT_USERNAME_TEXT, userId: this.state.username }))
    } else {
      alert('Please enter valid username and password')
      return;
    }
  }

  render() {
    const { primary1Color, accent1Color } = getColorsFromTheme(ThemeDefault);
    const reStyle = this.props.width === LARGE ? {
      position: 'relative',
      left: '-80px',
      top: '-20px'
    } : {};
    return (
      <div style={{ ...styles.main, ...reStyle }}>
        <Card style={styles.card}>
          <div style={styles.avatar}>
            <Avatar backgroundColor={accent1Color} icon={<LockIcon />} size={60} />
            <CardTitle title="Health Monitoring App" />
          </div>

          <div>
            <TextField
              style={{ marginLeft: 15 }}
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              style={{ marginLeft: 15 }}
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
          </div>
          <CardActions>
            <RaisedButton type="submit" primary label="Login" fullWidth onClick={this.loginBtnClick} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isUserLoggedIn: state.uiState.login.isUserLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionHandler(action) {
      dispatch(action);
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(LoginPage));