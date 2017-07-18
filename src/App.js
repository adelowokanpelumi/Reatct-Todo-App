import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import InputField from './inputfield.js'
import TodoList from './todolist.js'
import Task from './task.js'
import Filter from './filter.js'




class TodoApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: [
      {taskName: "Call all clients at noon"},
      {taskName: "Go to the bank at break"}
      ]
    }
  }

  removeTask(index){
    const tasks = this.state.tasks.slice(0);
    tasks.splice(index, 1);

    this.setState({tasks: tasks});
  }
  
  createTask(e){

    if  (e.which !== 13)
      return;

    const task = this.state.tasks.slice(0);
    task.push({taskName: e.target.value});
    this.setState({task: task});
  }

 


  render() {
    return (
      <div className="TodoList center">
      <div className="formgroup ">
      <Header />
      
      <InputField />
      <TodoList>
      {
        this.state.tasks.map((task, i) => <Task onClickHandler={this.removeTask.bind(this, i)} taskName={task.taskName} key={i} />) }
        
      </TodoList>
      <task>
      <ul class="list-unstyled colorg" id="todo"></ul>
      <Filter />
      </task>
      </div>
      </div>
    );
  }
}

export default TodoApp;
