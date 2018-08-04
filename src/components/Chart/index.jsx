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

// actions
import * as actions from '../../actions/chart';

// CSSinJS

class Chart extends React.Component {
  render() {
    return (
      <div
        id="chart"
      >
        <h1
          style={{
            color: 'white',
            marginTop: '200px'
          }}
        >
          ここはChartのページ
        </h1>
      </div>
    );
  }
}

Chart = connect(state => ({
  formValues: getFormValues('chart')(state),
  valid: isValid('chart')(state)
}))(Chart);

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
  form: 'chart',
})(Chart)));

