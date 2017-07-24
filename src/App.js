import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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

    updateLocalStorage(updatedTasks) {
      console.log("Tasks Updated");
      localStorage.setItems('storedTasks', JSON.stringify(updatedTasks));

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
