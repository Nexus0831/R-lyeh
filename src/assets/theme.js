import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import yellow from '@material-ui/core/colors/yellow';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: purple,
    secondary: yellow,
  },
});
