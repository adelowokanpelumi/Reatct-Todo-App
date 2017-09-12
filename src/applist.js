import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class TodoAppList extends Component {
  constructor(){
    super();
    this.remove = this.remove.bind(this);
    this.Clear = this.Clear.bind(this);
    this.update= this.update.bind(this)
    this.props = {tasks: []};
  }

  remove(elem){
    var value = elem.target.parentNode.querySelector('button').innerText;
    this.props.remove(value);
  }

  update(e, index){
    this.props.updateItem(index);
    console.log("saved");
  }


  Clear(elem){
    var Clearall = elem.target.parentNode.querySelector("ul").innerHTML;
    this.props.Clear(Clearall);
  }


  render() {

  	var items = this.props.tasks.map((elem, i) => {
  		return  <div className="col-md-offset-4 col-md-4 task" id="{this.generateUniqueId}" data->
                <li className="" key={i}>
                <input onChange={(e)=>this.update(e,i)}
                        className="round text-left" type="checkbox"
                        autocomplete="on" id="checkbox" value="1"
                        ref={'ref_' + i} />
                  <label for="checkbox" className="text-center">{elem.text}</label>
                  <button className="remove" onClick={this.remove}>x</button>
              </li>
              </div>
  	});

    return (
      <div>
          <ul className="tasks-container">
      	   {items}
          </ul> 
        <div className="col-md-offset-4 col-md-5 filter">
          <ul id="counter" className="ulfilter">
          <span className="counts">{(this.props.tasks.length ) + ' items left'} </span>
            <li className="rightt" >
              <a href="/App" className="decor"> All</a>
            </li>
            <li >
              <a href="/Active" className="decor">Active</a>
            </li>
            <li >
              <a href="/Completed" className="decor">Completed</a>
            </li>
          </ul>

        </div>
      </div>
    );
  }
}

export default TodoAppList;
