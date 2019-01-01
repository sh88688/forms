import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import InputBuilder from './Input';
const data = [{
  "elementType":"textfield",
  "type": "text",
  "name": "FirstName",                    
  "classname": "text",
  "placeholder": "Enter first name",
  "inputProps":{defaultValue:"12:00"}
},
{
  "elementType":"textfield",
  "type": "password",
  "name": "paascode",                  
  "classname": "text",
  "placeholder": "Enter password"
  
},
{
  "elementType":"textfield",
  "type": "email",
  "name": "select color",                  
  "classname": "text",
  "placeholder": "Enter surname",
  "inputProps":{defaultValue:"2018/12/16"}
},
{
  "elementType":"textfield",
  "type": "date",
  "name": "select date",                  
  "classname": "text"
}
,
{
  "elementType":"radio",
  "name": "male",                  
  "classname": "text"
}
,
{
  "elementType":"radio",
  "name": "female",                  
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
    
    return ( 
      <div style={{ padding: 20 }}>
      <Grid container spacing={24}justify={"center"}>
        <Grid item xs={6}>
      <Card >
      <CardContent>
        {form}
      </CardContent>
        </Card>
        </Grid>
        </Grid>
        </div>
        )
    
    } 
    
  }


export default App;
