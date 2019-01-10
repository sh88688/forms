function checkValidity(value, rules) {
    let validityObj = { isValid: true, errorText: "" };
    if (rules.required) {
      validityObj.isValid = value.trim() !== "" && validityObj.isValid;
      validityObj.errorText =
        value.trim() !== "" ? validityObj.errorText : "* This field is required.";
    }
  
    if (rules.minLength) {
      validityObj.isValid =
        value.length >= rules.minLength && validityObj.isValid;
      validityObj.errorText =
        value.length >= rules.minLength
          ? validityObj.errorText
          : "* Min Length is 5.";
    }
  
    if (rules.maxLength) {
      validityObj.isValid =
        value.length <= rules.maxLength && validityObj.isValid;
      validityObj.errorText =
        value.length <= rules.maxLength
          ? validityObj.errorText
          : "* Max Length is 5.";
    }
  
    return validityObj;
  }
  
  export default checkValidity;
  