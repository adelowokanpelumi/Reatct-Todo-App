import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




class Completed extends React.Component {
	constructor () {
		super();
		this.justSubmitted = this.justSubmitted.bind(this);
		}

		 render(){
      return (
      <div className="">
      <Header />
        <AddNewTask updateList={this.updateList}/>
        <TodoAppList 
        	updateItem={this.updateTodo}
        	tasks= {this.state.tasks(Completed:true)}
        	remove={this.removeTask} />
      </div>
        );
    }
  }


export default AddNewTask;
