function checkValidity(value, rules) {
    let validityObj = { isValid: true, errorText: "" };
    
    if (rules.required) {
      validityObj.isValid = value.trim() !== "" && validityObj.isValid;
      validityObj.errorText =
        value.trim() !== "" ? validityObj.errorText : "* This field is required.";
    }
  
    if (rules.minLength && value.trim() !== "") {
      validityObj.isValid =
        value.length >= rules.minLength && validityObj.isValid;
      validityObj.errorText =
        value.length >= rules.minLength
          ? validityObj.errorText
          : `* Min Length is  ${rules.minLength}.`;
    }
  
    if (rules.maxLength && value.trim() !== "") {
      validityObj.isValid =
        value.length <= rules.maxLength && validityObj.isValid;
      validityObj.errorText =
        value.length <= rules.maxLength
          ? validityObj.errorText
          : `* Max Length is ${rules.maxLength}.`;
    }
  
    if (rules.isEmail && value.trim() !== "") {
      let regex = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,3})$/;

      validityObj.isValid =
        regex.test(value) && validityObj.isValid;
      validityObj.errorText =
        regex.test(value)
          ? validityObj.errorText
          : "Please enter a valid e-mail.";
    }
    if (rules.isDigit && value.trim() !== "") {
      let regex = /^\d+$/;

      validityObj.isValid =
        regex.test(value) && validityObj.isValid;
      validityObj.errorText =
        regex.test(value)
          ? validityObj.errorText
          : "Please enter only digits.";
    }
  
    return validityObj;
  }
  
  export default checkValidity;
  