import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import { Route } from 'react-router';

import Material from '../Material';

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
          <Route
            path="/"
            exact
            render={
              props => (
                <Material
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
