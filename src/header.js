import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {
  render(){
    return(
      <div>
      <h1>Todos</h1>
      <p>Tuteria | Create a task </p>
      </div>

      );
  }
}

export default Header;