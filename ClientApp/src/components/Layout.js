import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import LabelBottomNavigation from './modules/LabelBottomNavigation';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container>{this.props.children}</Container>
        <br />
        <br />
        <LabelBottomNavigation />
      </div>
    );
  }
}
