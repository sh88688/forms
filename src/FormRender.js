import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import InputBuilder from "./InputBuilder";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import checkValidity from "./Validator";
import jsonData from "./JsonData/formJson";
class FormRender extends Component {
  //constructor
  constructor(props){

    super(props);
   
    this.state = {
      sampleForm: jsonData,
      formIsValid: false,
      loading: false
    };
    
  }


  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.sampleForm) {
      formData[formElementIdentifier] = this.state.sampleForm[formElementIdentifier].value;
    }
    
    alert(JSON.stringify(formData));
   
  };

  inputChangedHandler = (event, inputIdentifier) => {
    //make a copy of sampleForm State
    const updatedsampleForm = {
      ...this.state.sampleForm
    };
    // make a copy of Changed Element
    const updatedFormElement = {
      ...updatedsampleForm[inputIdentifier]
    };
    //update changed value
    updatedFormElement.value = event.target.value;
    
    //check validity
    let getValidity = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    updatedFormElement.valid = getValidity.isValid;
    updatedFormElement.elementConfig.helperText = getValidity.errorText;
    //updated element's touched property
    updatedFormElement.touched = true;
    updatedsampleForm[inputIdentifier] = updatedFormElement;

    //Checking The whole form Validity
    let formIsValid = true;
    for (let inputIdentifier in updatedsampleForm) {
      formIsValid = updatedsampleForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ sampleForm: updatedsampleForm, formIsValid: formIsValid });
    //console.log(this.state.sampleForm[inputIdentifier]);
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.sampleForm) {
      formElementsArray.push({
        id: key,
        config: this.state.sampleForm[key]
      });
    }
    let form = (
      <form >
        {formElementsArray.map(formElement => (
          <InputBuilder
            key={formElement.id}
            touched={formElement.config.touched}
            errorValue={formElement.config.valid}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button variant="contained" onClick={this.orderHandler} disabled={!this.state.formIsValid} color="primary">
          Send Form
        </Button>
      </form>
    );

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" color="inherit">
              Dynamo Form
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
       
        <br />
        <Grid container spacing={24} justify={"center"}>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="inherit">
                  Enter your Contact Data
                </Typography>
                {form}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default FormRender;
