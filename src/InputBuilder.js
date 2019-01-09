import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const InputBuilder = ( props ) => {
    let inputElement = null;
    
   
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement =<TextField
            error={props.errorValue === false && props.touched !== false}
            onChange={props.changed}
            {...props.elementConfig}
          /> 
            break;
        case ( 'textarea' ):
            inputElement = <textarea
               
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
                error={props.errorValue === false && props.touched !== false}
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