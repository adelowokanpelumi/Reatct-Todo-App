import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




class AddNewTask extends React.Component {
	constructor () {
		super();
		this.justSubmitted = this.justSubmitted.bind(this);
		}

		justSubmitted(event) {
			event.preventDefault();
			var input = event.target.querySelector('input');
			var value = input.value;
			input.value = '';
			this.props.updateList(value);
		}

		render(){
			return (
				
		<form onSubmit={this.justSubmitted} >
		<input type="text" className="form-control input-lg input-mysize" 
      name="todo" placeholder="What needs to be done?"  />
		</form>

				);
		}
	}


export default AddNewTask;
