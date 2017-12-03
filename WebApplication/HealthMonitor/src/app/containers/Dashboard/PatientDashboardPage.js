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
import { Action } from '../../actions/Action';
import { navigateTo } from '../../utils/NavigationHelper';
import PatientDash from '../../presentations/Dashboard/PatientDash';
import { fetchData, postData } from '../../actions/Action';

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

class PatientDashboardPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actionHandler(postData(ActionConstants.GET_PATIENT_PROFILE_DATA, {
      "patientId": this.props.userId.toLocaleLowerCase()
    }));
    this.props.actionHandler(Action(ActionConstants.SET_CURRENT_SELECTED_TAB, { link: '', header: ActionConstants.NAVIGATION_PAGE_HEADER.DASHBOARD_HEADER }));
  }

  render() {
    return (
      <div>
        <PatientDash {...this.props} patientData={this.props.patientData} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isUserLoggedIn: state.uiState.login.isUserLoggedIn,
    patientData: state.data.current.patient,
    userId: state.uiState.login.userId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionHandler(action) {
      dispatch(action);
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(PatientDashboardPage));