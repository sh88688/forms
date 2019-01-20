const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema({
    country: String,
    deliveryMethod: String,
    dob:String,
    email:String,
    gender:String,
    mobile:String,
    name:String,
    zipCode:String

});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);
