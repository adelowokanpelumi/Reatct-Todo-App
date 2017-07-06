import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class TodoList extends Component {
  render(){
    return(
      <ul className="Todo-list">{this.props.children}</ul>
    );
  }
}

export default TodoList;