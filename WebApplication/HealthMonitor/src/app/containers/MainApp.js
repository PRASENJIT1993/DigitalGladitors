import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
import ThemeDefault from '../shared/styles/theme-default';
import Data from '../data/data';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setAppContext, navigateTo } from '../utils/NavigationHelper';
import ActionConstants from '../constants/ActionConstants';
import { getMenuBasedOnUserSelector } from '../utils/Seletors';
import ProgressLoader from '../shared/component/ProgressLoader';
import { Action } from '../actions/Action';
class MainApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false
    };
    setAppContext(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ navDrawerOpen: nextProps.width === LARGE });
    }
  }

  showErrorAlertAndClearState = (errorMessage) => {
    this.props.actionHandler(Action(ActionConstants.CLEAR_SERVER_ERROR));
    alert(errorMessage);
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    if (this.props.serverErrorMessage) {
      this.showErrorAlertAndClearState(this.props.serverErrorMessage);
    }
    let { navDrawerOpen } = this.state;
    const { isUserLoggedIn, userName, appHeader, menuData, appCurrentLink } = this.props;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen && isUserLoggedIn ? paddingLeftDrawerOpen : 0,
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0,
      },
      containerExtra: {
        //backgroundImage: 'url(' + require('../shared/resources/images/digitalhealth.png') + ')',
        margin: 0,
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0,
      }
    };

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          {isUserLoggedIn ?
            <div>
              <Header styles={styles.header} showIcons={isUserLoggedIn} appHeader={appHeader}
                handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} />
              <LeftDrawer navDrawerOpen={navDrawerOpen}
                menus={menuData}
                username={userName} appCurrentLink={appCurrentLink} /> </div> : ''}

          <div style={isUserLoggedIn ? styles.container : styles.containerExtra}>
            {this.props.isLoading && isUserLoggedIn && <ProgressLoader message={"Loading Data..."} />}
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

MainApp.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

function mapStateToProps(state) {
  return {
    isUserLoggedIn: state.uiState.login.isUserLoggedIn,
    userName: state.uiState.login.userName,
    appHeader: state.uiState.login.appHeader,
    menuData: getMenuBasedOnUserSelector(state),
    isLoading: state.uiState.login.isFetch || state.uiState.patientList.isFetch || state.uiState.patientDetails.isFetch || state.uiState.patient.isFetch,
    serverErrorMessage: state.error.patientList.serverErrorMessage,
    appCurrentLink: state.uiState.login.appCurrentLink,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionHandler(action) {
      dispatch(action);
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withWidth()(MainApp)));