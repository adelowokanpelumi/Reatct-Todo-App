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
			this.props.updateList({text: value,completed:false});
		}

		render(){
			return (
				<div className="row">
		<form onSubmit={this.justSubmitted} className="form-group col-md-offset-4 col-md-5"  >
		<input type="toggle" className="form-control input-mysize" 
      name="todo" placeholder="What needs to be done?"  />
		</form>
		</div>

				);
		}
	}


export default AddNewTask;
