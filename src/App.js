import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import InputBuilder from "./Input";
const data = [
  {
    elementType: "textfield",
    type: "text",
    name: "First Name",
    classname: "text",
    placeholder: "Enter first name",
    inputProps: { defaultValue: "Shivam" },
    variant: "outlined"
  },
  {
    elementType: "textfield-select",
    type: "text",
    name: "Currency",
    classname: "text",
    placeholder: "Select Currency",
    inputProps: { defaultValue: "Shivam",shrink:true },
    variant: "outlined"
  },
  {
    elementType: "textfield",
    type: "password",
    name: "Last Name",
    classname: "text",
    placeholder: "Enter first name",
    inputProps: { defaultValue: "Sharma" },
    variant: "outlined"
  },
  {
    elementType: "textfield",
    type: "password",
    name: "paascode",
    classname: "text",
    placeholder: "Enter password",
    variant: "outlined"
  },
  {
    elementType: "textfield-date",
    type: "date",
    name: "Birthday",
    classname: "text",
    placeholder: "Your Birthday",
    inputProps: { defaultValue: "2018/12/16",shrink:true },
    variant: "outlined"
  },
  {
    elementType: "textfield",
    type: "number",
    name: "select date",
    classname: "text",
    variant: "outlined"
  },
  {
    elementType: "radio",
    name: "male",
    classname: "text"
  },
  {
    elementType: "radio",
    name: "female",
    classname: "text"
  }
];

class App extends Component {

  
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
        ...this.state.orderForm
    };
    const updatedFormElement = { 
        ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
}


  render() {
    const form = data.map((input, i) => {
      return (
        <div>
          <InputBuilder id={input.name} params={input} changeValue={(event) => this.inputChangedHandler(event, formElement.id)} />
        </div>
      );
    });

    return (
      <div style={{ padding: 20 }}>
        <Grid container spacing={24} justify={"center"}>
          <Grid item xs={6}>
            <Card>
              <CardContent>{form}</CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
