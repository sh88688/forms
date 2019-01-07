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

class InputBuilder extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    console.log(event.target.value);
  }

  render() {
    const {
      type,
      name,
      classname,
      placeholder,
      inputProps,
      elementType,
      variant
    } = this.props.params;
    console.log("key", this.props.id);
    let Element = "";
    switch (elementType) {
      case "radio":
        Element = (
          <Radio
            value="b"
            key={this.props.id}
            onChange={this.changeValue}
            id={name}
            name={name}
          />
        );
        break;
      case "textfield":
        Element = (
          <TextField
            key={this.props.id}
            onChange={this.changeValue}
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
            id="outlined-select-currency"
            select
            label="Select"
            onChange={this.changeValue}
            helperText="Please select your currency"
            margin="normal"
            variant="outlined"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        );
        break;
    }
    return <div className={classname}>{Element}</div>;
  }
}

export default InputBuilder;
