import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class InputField extends Component {

	 createTask(e){
    if (e.which !== 13)
      return;

    const tasks = this.state.tasks.slice(0);
    tasks.push({taskName: e.target.value});
    this.setState({tasks: tasks});
  }

  render(){
    return(
    <form className="role" onsubmit="handle">
      <input type="text" className="form-control input-lg input-mysize" 
      name="todo" placeholder="What needs to be done?"  />
    </form>
    );
  }
}

export default InputField;