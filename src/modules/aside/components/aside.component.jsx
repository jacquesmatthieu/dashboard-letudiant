import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuList, MenuItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import BugIcon from '@material-ui/icons/BugReport';
import MergeIcon from '@material-ui/icons/CallMerge';

import Theme from '../../../config/theme';

const Item = styled(MenuItem)`
  color: #fff !important;
`;

const Navigation = styled.nav`
  position: fixed;
  bottom: 0;
  height: 100vh;
  background: ${Theme.primaryColor};
  color: #fff;
`;

class Aside extends Component {
  render() {
    return (
      <Navigation>
        <MenuList>
          <Item><HomeIcon /></Item>
          <Item><CodeIcon /></Item>
          <Item><BugIcon /></Item>
          <Item><MergeIcon /></Item>
        </MenuList>        
      </Navigation>
    );
  }
}

Aside.propTypes = {

};

export default Aside;