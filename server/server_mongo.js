const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const patientRoutes = express.Router();
const PORT = 4000;
let Customer = require("../model/customer.model")

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/easy_bussi', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


customerRoutes.route('/').get(function(req, res) {
    Customer.find(function(err, customers) {
        if (err) {
            console.log(err);
        } else {
            res.json(customers);
        }
    });
});
customerRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Customer.findById(id, function(err, customer) {
        res.json(customer);
    });
}); 

// patientRoutes.route('/update/:id').post(function(req, res) {
//     Patient.findById(req.params.id, function(err, patient) {
//         if (!patient)
//             res.status(404).send("data is not found");
//         else    
//             patient.firstName = req.body.firstName, 
//             patient.middleName = req.body.middleName,
//             patient.lastName = req.body.lastName,
//             patient.gender = req.body.gender,
//             patient.dob = req.body.dob,
//             patient.height = req.body.height,
//             patient.weight = req.body.weight,
//             patient.email = req.body.email,
//             patient.contactNumber = req.body.contactNumber,
//             patient.maritalStatus = req.body.maritalStatus,
//             patient.addressLine1 = req.body.addressLine1,
//             patient.addressLine2 = req.body.addressLine2,
//             patient.city = req.body.city,
//             patient.stateOrProvince = req.body.stateOrProvince,
//             patient.zipCode = req.body.zipCode,
//             patient.country = req.body.country,
//             patient.takingMed = req.body.takingMed,
//             patient.medList = req.body.medList

//             patient.save()
//             .then(patient => {
//                 res.json('patient updated!');
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });
customerRoutes.route('/add').post(function(req, res) {
    let customer = new Customer(req.body);
    customer.save()
        .then(patient => {
            res.status(200).json({'customer': 'Customer registered successfully'});
        })
        .catch(err => {
            res.status(400).send('patient registration failed');
        });
});


app.use('/easy_bussi/customers', customerRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});