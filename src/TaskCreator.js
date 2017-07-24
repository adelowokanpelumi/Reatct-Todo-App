import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




class TaskCreator extends Component {
 

  render() {
    return (
      <div className="task--creator" >
      	<label>New task: </label>
      	<input type="text"
      	onKeyUp={this.props.onKeyUpHandler}
      	 placeholder="Enter a Task..." />
      </div>
    );
  }
}

export default TaskCreator;
