import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import { spacing, typography } from 'material-ui/styles';
import { white, blue600 } from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';
import ActionConstants from '../constants/ActionConstants';
import userImage from '../shared/resources/images/userImage.jpg';

const LeftDrawer = (props) => {
  let { navDrawerOpen, appCurrentLink } = props;
  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: blue600,
      paddingLeft: 20,
      height: 56,
    },
    menuItem: {
      color: white,
      fontSize: 14
    },
    selectedMenuItem: {
      color: white,
      fontSize: 14,
      backgroundColor: '#1E88E5',
      color: '#FFFFFF'
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        height: 45
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'white',
        fontWeight: 300,
        textShadow: '1px 1px #444',
        fontWeight: 'bold'
      }
    }
  };

  return (
    <Drawer
      docked={true}
      open={navDrawerOpen}>
      <div style={styles.logo}>
        {ActionConstants.APP_NAME_DEFAULT}
      </div>
      <div style={styles.avatar.div}>
        <Avatar src={userImage}
          size={50}
          style={styles.avatar.icon} />
        <span style={styles.avatar.span}>{`Hello ${props.username}`}</span>
      </div>
      <div>
        {props.menus.map((menu, index) =>
          <MenuItem
            key={index}
            style={styles.menuItem}
            style={appCurrentLink === menu.link ?
              { ...styles.selectedMenuItem } : { ...styles.menuItem }}
            primaryText={menu.text}
            leftIcon={menu.icon}
            containerElement={<Link to={menu.link} />}
          />
        )}
      </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default LeftDrawer;
