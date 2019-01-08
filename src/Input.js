import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import MenuItem from "@material-ui/core/MenuItem";
const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

const Input = (props) => {

  const {
    type,
    name,
    classname,
    placeholder,
    inputProps,
    elementType,
    variant
  } = props.params;

  let Element = "";
    switch (elementType) {
      case "radio":
        Element = (
          <Radio
            value="b"
            key={props.id}
            onChange={props.changeValue}
            id={name}
            name={name}
          />
        );
        break;
      case "textfield":
        Element = (
          <TextField
            key={props.id}
            onChange={props.changeValue}
            id={name}
            label={name}
            name={name}
            type={type}
            placeholder={placeholder}
            inputProps={inputProps}
            variant={variant}
            margin="normal"
          />
        );
        break;
      case "textfield-select":
        Element = (
          <TextField
            key={props.id}
            id={name}
            select
            label={name}
            helperText={placeholder}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
            shrink: inputProps.shrink,
            }}
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        );
        break;

      case "textfield-date":
        Element = (<TextField
          key={props.id}
          id={name}
          label={name}
          name={name}
          type={type}
          placeholder={placeholder}
          inputProps={inputProps}
          InputLabelProps={{
            shrink: inputProps.shrink,
          }}
      />);
      break;
    default:
    Element = (
      <TextField
        key={props.id}
        onChange={props.changeValue}
        id={name}
        label={name}
        name={name}
        type={type}
        placeholder={placeholder}
        inputProps={inputProps}
        variant={variant}
        margin="normal"
      />
    );
      break;
    }
    
    return (
   <div className={classname}>{Element}</div>
    );
}

export default Input;
