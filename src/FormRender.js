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

class FormRender extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "password",
          label: "Emp Id",
          placeholder: "Your Emp ID",
          defaultValue: "",
          helperText: "",
          variant: "outlined",
          margin: "normal"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5
        },
        valid: false,
        touched: false
      },
      gender: {
        elementType: "radio",
        elementConfig: {
          configs: {
            name: "gender",
            label: "Your Gender",
            defaultValue: "male",
            color: "secondary",
            margin: "normal"
          },
          options: [
            { value: "male", label: "Male", labelPlacement: "start" },
            { value: "female", label: "Female", labelPlacement: "start" },
            { value: "other", label: "Other", labelPlacement: "start" }
          ]
        },
        value: "female",
        validation: {},
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          helperText: "",
          label: "Street",
          variant: "outlined",
          margin: "normal"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Postal Code",
          helperText: "",
          variant: "outlined",
          margin: "normal"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          label: "Country",
          helperText: "",
          variant: "outlined",
          margin: "normal"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          label: "E-mail",
          helperText: "",
          variant: "outlined",
          margin: "normal"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      dob: {
        elementType: "input",
        elementConfig: {
          type: "date",
          label: "Birthday",
          helperText: "",
          variant: "outlined",
          margin: "normal",
          InputLabelProps: { shrink: true }
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ],
          configs: {
            variant: "outlined",
            margin: "normal",
            label: "Delivery",
            InputLabelProps: { shrink: true },
            helperText: "Select Your Delivery Method"
          }
        },
        value: "fastest",
        validation: {},
        valid: true
      }
    },
    formIsValid: false,
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    };
    console.log(order);
  };

  inputChangedHandler = (event, inputIdentifier) => {
    //make a copy of orderForm State
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    // make a copy of Changed Element
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
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
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    //Checking The whole form Validity
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    //console.log(this.state.orderForm[inputIdentifier]);
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
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
        <Button variant="contained" color="primary">
          Order
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
        {JSON.stringify(this.state.formIsValid)}
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
