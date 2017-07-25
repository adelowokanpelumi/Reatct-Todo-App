import React from 'react';
import InlineEdit from 'react-edit-inline';
 
class Editable extends React.Component {
 
    constructor(props){
      super(props);
      this.dataChanged = this.dataChanged.bind(this);
      this.state = {
        message: 'ReactInline demo'
      }
    }
 
    dataChanged(data) {
        // data = { description: "New validated text comes here" } 
        // Update your model from here 
        console.log(data)
        this.setState({...data})
    }
 
    customValidateText(text) {
      return (text.length > 0 && text.length < 64);
    }
 
    render() {
        return (<div>
            <h2>{this.state.message}</h2>
            <span>Edit me: </span>
            <InlineEdit
              validate={this.customValidateText}
              activeClassName="editing"
              text={this.state.message}
              paramName="message"
              change={this.dataChanged}
              
            />
        </div>)
    }
}

export default Editable;