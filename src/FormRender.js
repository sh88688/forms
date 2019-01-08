import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Spinner from './Spinner/Spinner';
import InputBuilder from "./InputBuilder";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class FormRender extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    label: 'Name',
                    helperText: 'Your Name',
                    variant: "outlined",
                    margin: "normal",
                    
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    helperText: 'Street',
                    label: 'Street',
                    variant: "outlined",
                    margin: "normal"
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    label: 'Postal Code',
                    helperText: 'ZIP Code',
                    variant: "outlined",
                    margin: "normal"
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    label: 'Country',
                    helperText: 'Your Country',
                    variant: "outlined",
                    margin: "normal"
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    label: 'E-mail',
                    helperText: 'Your E-Mail',
                    variant: "outlined",
                    margin: "normal",
                    
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            dob: {
                elementType: 'input',
                elementConfig: {
                    type: 'date',
                    label: 'Birthday',
                    helperText: 'Your Birthday',
                    variant: "outlined",
                    margin: "normal",
                    InputLabelProps:{shrink:true}
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ],
                    configs:{
                        variant: "outlined",
                        margin: "normal",
                        label: 'Delivery',
                        InputLabelProps:{shrink:true},
                        helperText:'Select your delivery method'
                    }
                },
                value: '',
                validation: {},
                valid: true
            }
        },
        formIsValid: false,
        loading: false
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }
       console.log(order);
    }

    checkValidity(value, rules) {
        let isValid = true;
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
            
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

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
        console.log(updatedFormElement);
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render () {
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
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button variant="contained" color="primary" >Order</Button>
               
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div style={{ padding: 20 }}>
            <Grid container spacing={24} justify={"center"}>
              <Grid item xs={6}>
                <Card>
                    <CardContent>
                    <h4>Enter your Contact Data</h4>
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