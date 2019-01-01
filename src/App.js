import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import InputBuilder from './Input';
const data = [{
  "type": "time",
  "name": "FirstName",                    
  "classname": "text",
  "placeholder": "Enter first name",
  "inputProps":{defaultValue:"12:00"}
},
{
  "type": "password",
  "name": "paascode",                  
  "classname": "text",
  "placeholder": "Enter password"
  
},
{
  "type": "email",
  "name": "select color",                  
  "classname": "text",
  "placeholder": "Enter surname",
  "inputProps":{defaultValue:"2018/12/16"}
},
{
  "type": "date",
  "name": "select date",                  
  "classname": "text"
}
]

class App extends Component {
  render() {

   const form = data.map((input, i) => {
     
    return <div>
    <InputBuilder id={input.name} params={input} />
    </div> 
   
   
  });
    
    return (  <Card >
      <CardContent>
        {form}
      </CardContent>
        </Card>)
    
    } 
    
  }


export default App;
