import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




class Header extends Component {
 

  render() {
    return (
      <div className="col-md-4 col-md-offset-4 ">
        <h1> todos</h1>
        <p>Tuteria | Create a task </p>
      </div>
    );
  }
}

export default Header;
