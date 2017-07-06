import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Task extends Component {
  render(){
    return(
    <div>
      <li className="Task" onClick={this.props.onClickHandler}>
      {this.props.taskName}
      </li>
        </div>

    );
  }
}

export default Task;