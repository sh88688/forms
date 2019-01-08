import React from "react";
import TextField from "@material-ui/core/TextField";
import classes from './Input.css';
import MenuItem from "@material-ui/core/MenuItem";

const InputBuilder = ( props ) => {
    let inputElement = null;
    
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }
   
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement =<TextField
            className={inputClasses.join(' ')}
            onChange={props.changed}
            {...props.elementConfig}
          /> 
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <TextField
                select
                value={props.value}
                {...props.elementConfig.configs}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.displayValue}
                </MenuItem>
                ))}
                </TextField>);
            break;
        default:
            inputElement = <input
                
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div >
            <label >{props.label}</label>
            {inputElement}
        </div>
    );

};

export default InputBuilder;