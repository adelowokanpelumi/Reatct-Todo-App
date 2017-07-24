import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import AddNewTask from './addtask.js';
import TodoAppList from './applist.js';
import Filter from './filter.js';



class Todo extends React.Component {
	constructor (props) {
		super();
		this.state = {tasks: props.tasks};
		this.updateList = this.updateList.bind(this);
    this.removeTask = this.removeTask.bind(this);
		}

		updateList(text) {
			var updatedTasks = this.state.tasks;
			updatedTasks.unshift(text);
			this.setState({tasks: updatedTasks});
      this.updateLocalStorage(updatedTasks);
		}

    removeTask(text) {
      var updatedTasks = this.state.tasks;
      updatedTasks.splice(updatedTasks.indexOf(text), 1);
      this.setState({tasks: updatedTasks});
      this.updateLocalStorage(updatedTasks);
    }
=======
import Header from './header.js';
import InputField from './inputfield.js'
import TodoList from './todolist.js'
import Task from './task.js'
import Filter from './filter.js'



>>>>>>> 00254edbc7179aafc4a32b51566f79074d1319d9

    updateLocalStorage(updatedTasks) {
      console.log("Tasks Updated");
      localStorage.setItems('storedTasks', JSON.stringify(updatedTasks));

<<<<<<< HEAD
    }

		render(){
			return (
			<div>
				<h1> Todos</h1>
				<p>Tuteria | Create a task </p>
				<AddNewTask updateList={this.updateList}/>
				<TodoAppList tasks= {this.state.tasks} remove={this.removeTask} />
				<Filter/>
			</div>
				);
		}
	}


export default Todo;
=======
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
>>>>>>> 00254edbc7179aafc4a32b51566f79074d1319d9
