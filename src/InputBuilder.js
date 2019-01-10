import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
const InputBuilder = props => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <TextField
          error={props.errorValue === false && props.touched !== false}
          onChange={props.changed}
          {...props.elementConfig}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <TextField
          select
          value={props.value}
          {...props.elementConfig.configs}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.displayValue}
            </MenuItem>
          ))}
        </TextField>
      );
      break;
    case "radio":
      inputElement = (
        <FormControl component="fieldset">
          <FormLabel component="legend">
            {props.elementConfig.configs.label}
          </FormLabel>
          <RadioGroup
            {...props.elementConfig.configs}
            onChange={props.changed}
            value={props.value}
            row
          >
            {props.elementConfig.options.map(option => (
              <FormControlLabel
                key={option.value}
                {...option}
                control={<Radio color={props.elementConfig.configs.color} />}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
      break;
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default InputBuilder;
