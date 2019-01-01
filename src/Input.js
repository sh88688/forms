import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
class InputBuilder extends Component {

constructor(props) {
super(props);
this.changeValue = this.changeValue.bind(this);
}

changeValue(event) {
console.log(event.target.value);
}

render() {
const { type, name, classname, placeholder, inputProps } = this.props.params;
console.log('key',this.props.id);
return (
    
  <div className={classname}>
    
    <TextField 
      key={this.props.id}
      onChange={this.changeValue}
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      inputProps={inputProps}
    />
  </div>
);
}

}

export default InputBuilder;