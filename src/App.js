import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import InputField from './inputfield.js'
import TodoList from './todolist.js'
import Task from './task.js'




class TodoApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: [
      {taskName: "task1"},
      {taskName: "task2"}
      ]
    }
  }

  removeTask(index){
    const tasks = this.state.tasks.slice(0);
    tasks.splice(index, 1);

    this.setState({tasks: tasks});
  }

  createTask(e){
    if (e.which !== 13)
      return;

    const tasks = this.state.tasks.slice(0);
    tasks.push({taskName: e.target.value});
    this.setState({tasks: tasks});
  }


  render() {
    return (
      <div className="TodoList center">
      <div className="formgroup ">
      <Header />
      <InputField onKeyUphandler={this.createTask.bind((this))} />
      
      <TodoList>
      {
        this.state.tasks.map((task, i) => <Task onClickHandler={this.removeTask.bind(this, i)} taskName={task.taskName} key={i} />) }
        
      </TodoList>
      <ul class="list-unstyled" id="todo"></ul>
      </div>
      </div>
    );
  }
}

export default TodoApp;
