import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './activate.js';

class Header extends Component {
  render(){
    return(
      <div>
      <h1>Todos</h1>
      <p>Tuteria | Create a task </p>
      </div>

      );
  }
}

class InputField extends Component {

  render(){
    return(
    <form className="role" onsubmit="handle">
      <input type="text" className="form-control input-lg input-mysize" 
      name="todo" placeholder="What needs to be done?"  />
      </form>
    );
  }
}

class TodoList extends Component {
  render(){
    return(
      <ul className="Todo-list">{this.props.children}</ul>
    );
  }
}

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
