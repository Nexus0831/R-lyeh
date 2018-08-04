/* eslint-disable no-class-assign */
// node_modules
import React from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { withRouter } from 'react-router';

import {
  reduxForm,
  Field,
  getFormValues,
  isValid,
  initialize
} from 'redux-form';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import * as actions from '../../actions/home';

import {
  CardContainer,
  HeaderContainer,
  MyButton
} from './cssinjs';

class Home extends React.Component {
  render() {
    return (
      <div
        id="material"
      >
        <CardContainer>
          <Card>
            <CardContent>
              <Typography variant="headline" component="h2">
                Card Example
              </Typography>
            </CardContent>
          </Card>
          <br />
          <MyButton>
            styled Components
          </MyButton>
          <br />
          <Checkbox />
        </CardContainer>
      </div>
    );
  }
}

Home = connect(state => ({
  formValues: getFormValues('home')(state),
  valid: isValid('home')(state)
}))(Home);

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'home',
})(Home)));
