/* eslint-disable no-undef */
import React from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { BrowserRouter as Router } from 'react-router-dom';

// Material-UI
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Material- Icon
import MenuIcon from '@material-ui/icons/Menu';
import BarChartIcon from '@material-ui/icons/BarChart';

import * as actions from './../../actions/app';
import Routes from '../Routes';

import { theme } from '../../assets/theme';

import { drawerTitle } from '../../../Datas/titleData';


class App extends React.Component {
  render() {
    return (
      <div
        style={{
          height: '100%'
        }}
      >
        <Router
          basename={PUBLIC_URL}
        >
          <MuiThemeProvider theme={theme}>
            <AppBar
              color="primary"
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Menu"
                  style={{
                    marginLeft: '-12px',
                    marginRight: '20px',
                  }}
                  onClick={this.props.drawerOpen}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                  {"R'lyeh"}
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer open={this.props.app.isOpen} onClose={this.props.drawerClose}>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <BarChartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Chart" />
                </ListItem>
              </List>
            </Drawer>
            <Routes
              {...this.props}
            />
          </MuiThemeProvider>
        </Router>
      </div>
    );
  }
}

// To Contaienr
const mapStateToProps = (state) => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign(
      {},
      actions
    ),
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
