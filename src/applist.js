import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




class TodoAppList extends Component {
  constructor(){
    super();
    this.remove = this.remove.bind(this);
  }

  remove(elem){
    var value = elem.target.parentNode.querySelector('span').innerText;
    this.props.remove(value);
  }
 

  render() {

  	var items = this.props.tasks.map((elem, i) => {
  		return <li className="Task" key={i}>
                <span>{elem}</span>
                <button onClick={this.remove}>x</button>
              </li>
  	});
    return (
      <ul>
      	{items}
      </ul>
    );
  }
}

export default TodoAppList;
