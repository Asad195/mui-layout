import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";

import IconButton from "@material-ui/core/IconButton";

import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import Tooltip from "@material-ui/core/Tooltip";

import { withStyles } from "@material-ui/core/styles";

import Help from "@material-ui/icons/Help";
//import MenuIcon from '@material-ui/icons/Menu';
//import NotificationsIcon from '@material-ui/icons/Notifications';

const lightColor = "rgba(255, 255, 255, 0.7)";

const styles = theme => ({
  secondaryBar: {
    zIndex: 0
  },
  menuButton: {
    marginLeft: -theme.spacing()
  },
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white
    }
  },
  button: {
    borderColor: lightColor
  }
});

function Header(props) {
  const { classes, onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={0} textColor="inherit">
          <Tab textColor="inherit" label="Users" />
          <Tab textColor="inherit" label="Sign-in method" />
          <Tab textColor="inherit" label="Templates" />
          <Tab textColor="inherit" label="Usage" />
        </Tabs>

        <Tooltip title="Help">
          <IconButton color="inherit">
            <Help />
          </IconButton>
        </Tooltip>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired
};

export default withStyles(styles)(Header);
