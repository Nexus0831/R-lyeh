/* eslint-disable no-undef */
import React from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { BrowserRouter as Router } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Icon';

import * as actions from './../../actions/app';
import Routes from '../Routes';
import { theme } from '../../assets/theme';


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
                <IconButton color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                  {"R'lyeh"}
                </Typography>
              </Toolbar>
            </AppBar>
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
