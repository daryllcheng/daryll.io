import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import Scroll, { Link, Element, Events, scroll, scrollSpy } from 'react-scroll';

class BurgerNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOpen: false
    })
  }
  
  render() {
    return (
      <Menu className="burgerNav" right isOpen={ this.state.isOpen }>
        { this.props.projects.map(project =>
          <Link className="menu-item" activieClass="active" to={ project.Name } spy={ true } smooth={ true } duration={ 500 } onClick={ () => this.handleClick() }>
            <span>{ project.Name }</span>
          </Link>
        )}
      </Menu>
    );
  }
}
export default BurgerNav;