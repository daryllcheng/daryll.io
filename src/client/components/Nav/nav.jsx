import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import DotNav from './dotNav.jsx';
import BurgerNav from './burgerNav.jsx';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      width:  800
    }

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() { window.innerWidth < 500 ? 
    this.setState({ width: 450 }) : this.setState({ width: window.innerWidth - 100 }) 
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div className="nav">
        { this.state.width < 800 ? <BurgerNav projects={ this.props.projects } /> : <DotNav projects={ this.props.projects } /> }
      </div>
    )
  }
}

export default Nav;