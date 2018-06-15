import React from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { BrowserRouter } from 'react-router-dom';

// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
        <BrowserRouter>
          <MuiThemeProvider theme={theme} >
            <Routes
              {...this.props}
            />
          </MuiThemeProvider>
        </BrowserRouter>
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
