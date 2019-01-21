# forms
React material-ui forms
expressJS

#sample Json Format of form rendering
"iForm":{
          "mobile": {
                "elementType": "input", //type of element (e.g : input,radio,select)
                "elementConfig": {
                  "type": "tel", // type of input (e.g : text,number,date)
                  "helperText": "", // leave empty this is used for error text
                  "label": "Mobile", // label of the field
                  "variant": "outlined", // variant of field (e.g : standard,filled,outlined)
                  "placeholder": "Enter Mobile",
                  "margin": "normal"
                },
                "inputAdornment": {     // inputAdornment (prefix or suffix for the field e.g : +91, $,)
                  "startAdornment": {    // startAdornment (prefix) OR endAdornment (suffix)
                    "position": "start",
                    "value": "+91"
                  }
                },
                "value": "", // if value is passed in this field so set "valid":true 
                "validation": { //leave empty if no-validation is required. (e.g : {}, required,isDigit,isEmail,isAlpha)
                  "required": true, 
                  "isDigit": true,
                  "minLength": "10",
                  "maxLength": "10"
                },
                "valid": false, // intial value is false But " where value is prefilled set it to true"
                "touched": false
              },
}
-----------------------------------------------------------------------------------------------------------------------

