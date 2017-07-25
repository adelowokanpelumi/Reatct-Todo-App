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
  		return <li className={elem.checked===true? 'done':'.li'} key={i}>
                    <input  className = "input-group-addon" checked={elem.checked} type = "radio" />
                  {elem}
                  <span className="remove" onClick={this.remove}>x</span> 
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
