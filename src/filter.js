import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Filter extends Component {
  render(){
    return(
    		<div className="container col-md-4 col-md-offset-4 filter">
    		<p>(0) items</p>
    		</div>

    );
  }
}

export default Filter;
