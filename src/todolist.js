import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class TodoList extends Component {
  render(){
    return(
    <div>
      <h3><ul className="Todo-list colorg">{this.props.children}</ul></h3>
    </div>
    );
  }
}

export default TodoList;