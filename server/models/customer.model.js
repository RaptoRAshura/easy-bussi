const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customer = new Schema({
    customerID : {type: Number},
    firstName : {type: String}, 
    middleName: {type: String}, 
    lastName: {type: String},  
    email: {type: String},
    contactNumber: {type: String},  
    addressLine1: {type: String}, 
    addressLine2: {type: String}, 
    city: {type: String}, 
    stateOrProvince: {type: String},
    zipCode: {type: String}, 
    country: {type: String},  
});
module.exports = mongoose.model('customer_data', Customer);