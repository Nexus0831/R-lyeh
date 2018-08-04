import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import { Route } from 'react-router';

import Home from '../Home';
import Chart from '../Chart';

// import { withTheme } from '@material-ui/core/styles';
// import { theme } from '../../assets/theme';

class Routes extends React.Component {
  render() {
    return (
      <div
        id="routes"
        style={{
          height: '100%'
        }}
      >
        <Switch>
          {/* Home */}
          <Route
            path="/"
            exact
            render={
              props => (
                <Home
                  {...props}
                />
              )
            }
            {...this.props}
          />
          {/* Chart */}
          <Route
            path="/chart"
            exact
            render={
              props => (
                <Chart
                  {...props}
                />
              )
            }
            {...this.props}
          />
        </Switch>
      </div>

    );
  }
}

export default Routes;
