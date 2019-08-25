var express = require('express')
var venues = express.Router()
let db = require('../db');
// let UsersController = require ('../controllers/users.controller');



var { Validator, ValidationError } = require('express-json-validator-middleware');
 
 
// Initialize a Validator instance first
var validator = new Validator({allErrors: true}); // pass in options to the Ajv instance
 
// Define a shortcut function
var validate = validator.validate;

// JSON Schema
var user_schema = {
    type: 'object',
    required: ['user_name', 'email', 'password', 'administrator'],
    properties: {
        user_name: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        administrator: {
            type: 'boolean'
        }
    }
}

venues.get('/', VenuesController.getAllVenues);


module.exports = venues;