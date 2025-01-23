"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contacts = [];
function addContact() {
    var fName = readline.question('Enter First Name: ');
    var lName = readline.question('Enter Last Name: ');
    var address = readline.question('Enter Address: ');
    var city = readline.question('Enter City: ');
    var state = readline.question('Enter State: ');
    var zip = readline.question('Enter Zip Code: ');
    var phoneNumber = readline.question('Enter Phone Number: ');
    var email = readline.question('Enter Email Address: ');
    var newContact = {
        fName: fName,
        lName: lName,
        address: address,
        city: city,
        state: state,
        zip: zip,
        phoneNumber: phoneNumber,
        email: email,
    };
    return newContact;
}
var newContact = addContact();
contacts.push(newContact);
console.log('Contact added successfully!');
console.log(newContact);
