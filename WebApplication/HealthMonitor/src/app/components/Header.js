import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import { white } from 'material-ui/styles/colors';


class Header extends React.Component {

  render() {
    const { styles, handleChangeRequestNavDrawer, showIcons, appHeader } = this.props;

    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57,
        marginLeft: -10,
      },
      menuButton: {
        marginLeft: 20
      },
      iconsRightContainer: {
        marginLeft: 20
      }
    };
    return (
      <div>
        <AppBar
          title={appHeader || "Login"}
          titleStyle={{ textAlign: "center" }}
          showMenuIconButton={showIcons}
          style={{ ...styles, ...style.appBar }}
          iconElementLeft={
            <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
              <Menu color={white} />
            </IconButton>
          }
          iconElementRight={showIcons ?
            <div style={style.iconsRightContainer}>
              {/* <IconMenu color={white}
                iconButtonElement={
                  <IconButton><ViewModule color={white} /></IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem key={1} primaryText="Application 1" />
                <MenuItem key={2} primaryText="Application 2" />
                <MenuItem key={3} primaryText="Application 3" />
              </IconMenu> */}
              <IconMenu color={white}
                iconButtonElement={
                  <IconButton><MoreVertIcon color={white} /></IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem primaryText="About us" containerElement={<Link to="/" />} />
                <MenuItem primaryText="Contact us" containerElement={<Link to="/" />} />
                <MenuItem primaryText="Sign out" containerElement={<Link to="/" />} />
              </IconMenu>
            </div> : undefined
          }
        />
      </div>
    );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func
};

export default Header;
