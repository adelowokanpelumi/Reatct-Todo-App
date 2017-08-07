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
				<div >
		<form onSubmit={this.justSubmitted} className="form-group"  >
		<input type="text" className="form-control col-md-6" 
      name="todo" placeholder="What needs to be done?"  />
		</form>
		</div>

				);
		}
	}


export default AddNewTask;
