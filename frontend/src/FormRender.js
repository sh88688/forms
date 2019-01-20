import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import InputBuilder from "./Components/InputBuilder";
import ErrorBoundary from "./Components/ErrorBoundary";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import checkValidity from "./Components/Validator";
import isFormValid from "./Components/FormValidSetter";

class FormRender extends Component {
  //constructor
  constructor(props){

    super(props);
   
    this.state = {
      iForm: {},
      formIsValid: false,
      loading: false
    };
    
  }
  componentDidMount()
  {
    fetch('http://localhost:3001/')
    .then(data => data.json())
    .then(res => {console.log(res); this.setState({iForm: res})});
  }

  submitHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    let formData = {};
    for (let formElementIdentifier in this.state.iForm) {
      formData[formElementIdentifier] = this.state.iForm[
        formElementIdentifier
      ].value;
    }
    console.log(formData);
    
        fetch('http://localhost:3001/putData',{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
    .then(data => data.json())
    .then(res => console.log(res));
  };

  inputChangedHandler = (event, inputIdentifier) => {
    //make a copy of iForm State
    const updatediForm = {
      ...this.state.iForm
    };
    // make a copy of Changed Element
    const updatedFormElement = {
      ...updatediForm[inputIdentifier]
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
    updatediForm[inputIdentifier] = updatedFormElement;

    //Checking The whole form Validity
    let formIsValid = isFormValid(updatediForm);

    this.setState({ iForm: updatediForm, formIsValid: formIsValid });
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.iForm) {
      formElementsArray.push({
        id: key,
        config: this.state.iForm[key]
      });
    }
    let form = (
      <form>
        {formElementsArray.map(formElement => (
          <InputBuilder
            key={formElement.id}
            touched={formElement.config.touched}
            errorValue={formElement.config.valid}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            inputAdornment={formElement.config.inputAdornment}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button
          variant="contained"
          onClick={this.submitHandler}
          disabled={!this.state.formIsValid}
          color="primary"
        >
          Send Form
        </Button>
      </form>
    );

    return (
      <div style={{ backgroundColor: "lightgrey" }}>
        <AppBar position="static" style={{ backgroundColor: "#1E88E5" }}>
          <Toolbar>
            <Typography variant="h6" fontFamily="Monospace" color="inherit">
              &nbsp; iForms
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <Grid container spacing={24} justify={"center"}>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography
                  fontFamily="Monospace"
                  align="center"
                  variant="h6"
                  color="inherit"
                >
                  Fill the details :
                </Typography>
                <ErrorBoundary>{form}</ErrorBoundary>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default FormRender;
