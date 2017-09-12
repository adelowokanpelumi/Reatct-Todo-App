import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddNewTask from './addtask.js';
import TodoAppList from './applist.js';
import Header from './header.js';



class Todo extends React.Component {
  constructor (props) {
    super();
    this.state = {tasks: props.tasks};
    this.updateList = this.updateList.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    }

    updateList(text) {
      var updatedTasks = this.state.tasks;
      console.log(updatedTasks)
      updatedTasks.unshift(text);
      this.setState({tasks: updatedTasks});
      this.updateLocalStorage(updatedTasks);
    }

    updateTodo(id){
      var new_todos = this.state.tasks.map((task,index)=>{
        if(index === id){
          task.completed = !task.completed
        }
        return task
      })
      this.setState({tasks:new_todos})
      this.updateLocalStorage(new_todos);
     }


    removeTask(text) {
      var updatedTasks = this.state.tasks;
      updatedTasks.splice(updatedTasks.indexOf(text), 1);
      this.setState({tasks: updatedTasks});
      this.updateLocalStorage(updatedTasks);
    }

    ClearAll(text) {
      var tasks = this.props.tasks;
      tasks.splice(tasks.indexOf(text),);
      this.setState({tasks: tasks});
      this.updateLocalStorage(tasks);
    }

    updateLocalStorage(updatedTasks) {
      console.log("Tasks Updated");
      localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));

    }


    render(){
      return (
      <div className="">
      <Header />
        <AddNewTask updateList={this.updateList}/>
        <TodoAppList updateItem={this.updateTodo} tasks= {this.state.tasks} Clear={this.ClearAll} remove={this.removeTask} />
      </div>
        );
    }
  }


export default Todo;
