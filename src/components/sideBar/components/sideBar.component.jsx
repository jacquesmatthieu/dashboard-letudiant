import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuList, MenuItem, Paper } from '@material-ui/core';

const Menu = styled(Paper)`
  width: 260px;
  position: fixed !important;
  height: 100vh;
`;

const Sidebar = styled(MenuList)``;

const Item = styled(MenuItem)`
`;

class SideBar extends Component {
  render() {
    return (
      <Menu>
        <Sidebar>
          <Item>Profile</Item>
          <Item>My account</Item>
          <Item>Logout</Item>
        </Sidebar>
      </Menu>
    );
  }
}

export default SideBar;