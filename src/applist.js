import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class TodoAppList extends Component {
  constructor(){
    super();
    this.remove = this.remove.bind(this);
    this.props = {tasks: []};
  }

  remove(elem){
    var value = elem.target.parentNode.querySelector('button').innerText;
    this.props.remove(value);
  }


  render() {

  	var items = this.props.tasks.map((elem, i) => {
  		return  <div className="col-md-offset-4 col-md-4 task">
                <li className="" key={i}>
                <input className="round text-left" type="checkbox" id="checkbox" />
                  <label for="checkbox" className="text-center">{elem}</label>
                  <button className="remove" onClick={this.remove}>x</button>
              </li>
              </div>
  	});
    return (
      <div>
      <ul >
      	{items}
      </ul> 
      <p id="counter"  className="col-md-offset-4 col-md-5 filter">
         {(this.props.tasks.length ) + ' item(s)'}
      </p>
      </div>
    );
  }
}

export default TodoAppList;
