import styled, { injectGlobal } from 'styled-components';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

export const CardContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;

export const HeaderContainer = styled.div`
  grid-row: 1 / -1;
  grid-column: 1 / 2;
`;

export const MyButton = styled(Button)`
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0px 1px 5px 0 rgba(0, 0, 0, 0.2),0 2px 2px 0 rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;

export const BaseContainer = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 20px 1fr 20px;
`;

export const globalStyles = injectGlobal`
  #material {
    display: grid;
    grid-template-rows: 80px 1fr;
    grid-template-columns: 20px 1fr 20px;
    height: 100%;
    
    @media (max-width: 619px) {
        grid-template-rows: 70px 1fr;
    }
  }
`;
