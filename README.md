# forms
React material-ui forms
expressJS

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.
1. nodeJS
2. ReactJS
3. expressJS
4. mongodb on mlab.com

Install node and npm is automatically install prerequisites throuh package.json


### Setup

Clone this repository into your local machine by runing

```
git clone https://github.com/sh88688/forms.git

```

Then

```
cd forms

npm install

```

And same for frontend folder

```
cd frontend 

npm install
```

Same for backend folder

```
cd backend 

npm install
```

End with an example of sample JSON data which is available in backend/JsonData/formJson.json

### JSON Format

sample Json Format of form rendering

```
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
```

