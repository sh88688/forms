import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
class InputBuilder extends Component {

constructor(props) {
super(props);
this.changeValue = this.changeValue.bind(this);
}

changeValue(event) {
console.log(event.target.value);
}

render() {
const { type, name, classname, placeholder, inputProps, elementType } = this.props.params;
console.log('key',this.props.id);
let Element ='';
switch(elementType)
{
  case 'radio':
   Element = <Radio
  value="b"
  key={this.props.id}
  onChange={this.changeValue}
  id={name}
  name={name}
/>
  break;
  case 'textfield':
   Element = <TextField 
  key={this.props.id}
  onChange={this.changeValue}
  id={name}
  name={name}
  type={type}
  placeholder={placeholder}
  inputProps={inputProps}
/>
  break;

}
return (
    
  <div className={classname}>
    {Element}
  </div>
);
}

}

export default InputBuilder;