import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Filter extends Component {
	constructor(props) {
    super(props);
    this.state = {items: [], text: ''};
  }

  render(){
    return(
    		<div className="col-md-4 col-md-offset-4 filter">
    		<p id="counter"> {'Add #' + (this.state.items.length + 1 )} </p>
    		</div>

    );
  }
}

export default Filter;
