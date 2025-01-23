"use strict";
// // use case 1.
//  import * as readlineSync from 'readline-sync';
Object.defineProperty(exports, "__esModule", { value: true });
// interface Data {
//   fName:string;
//   lName:String;
//   address:string;
//   city:string;
//   state:string;
//   zip:string;
//   phoneNumber:string;
//   email:string
// }
// const contacts:Data[]=[]
// const contact:Data={
//   fName:"kuber",
//   lName:"Seth",
//   address:"123 Model Town",
//   city:"Patiala",
//   state:"Punjab",
//   zip:"1234",
//   phoneNumber:"79541365",
//   email:"kuber@gmial.com"
// }
// contacts.push(contact)
// console.log(contact);
//Use Case 2
// import * as readlineSync from 'readline-sync'
// interface Data {
//   fName: string;
//   lName: string;
//   address: string;
//   city: string;
//   state: string;
//   zip: string;
//   phoneNumber: string;
//   email: string;
// }
// const contacts: Data[] = [];
// function addContact(): Data {
//   const fName = readline.question('Enter First Name: ');
//   const lName = readline.question('Enter Last Name: ');
//   const address = readline.question('Enter Address: ');
//   const city = readline.question('Enter City: ');
//   const state = readline.question('Enter State: ');
//   const zip = readline.question('Enter Zip Code: ');
//   const phoneNumber = readline.question('Enter Phone Number: ');
//   const email = readline.question('Enter Email Address: ');
//   const newContact: Data = {
//     fName,
//     lName,
//     address,
//     city,
//     state,
//     zip,
//     phoneNumber,
//     email,
//   };
//   return newContact;
// }
// const newContact = addContact();
// contacts.push(newContact);
// console.log('Contact added successfully!');
// console.log(newContact);
// use case 3
// import * as readline from 'readline-sync';
// interface Data {
//   fName: string;
//   lName: string;
//   address: string;
//   city: string;
//   state: string;
//   zip: string;
//   phoneNumber: string;
//   email: string;
// }
// const contacts: Data[] = [];
// function addContact(): Data {
//   const fName = readline.question('Enter First Name: ');
//   const lName = readline.question('Enter Last Name: ');
//   const address = readline.question('Enter Address: ');
//   const city = readline.question('Enter City: ');
//   const state = readline.question('Enter State: ');
//   const zip = readline.question('Enter Zip Code: ');
//   const phoneNumber = readline.question('Enter Phone Number: ');
//   const email = readline.question('Enter Email Address: ');
//   const newContact: Data = {
//     fName,
//     lName,
//     address,
//     city,
//     state,
//     zip,
//     phoneNumber,
//     email,
//   };
//   return newContact;
// }
// function findContactByName(fName: string, lName: string): Data | undefined {
//   return contacts.find((contact) => contact.fName === fName && contact.lName === lName);
// }
// function editContact(fName: string, lName: string): void {
//   const contactToEdit = findContactByName(fName, lName);
//   if (contactToEdit) {
//     console.log(`Editing contact for ${fName} ${lName}`);
//     contactToEdit.address = readline.question('Enter new Address: ', { defaultInput: contactToEdit.address });
//     contactToEdit.city = readline.question('Enter new City: ', { defaultInput: contactToEdit.city });
//     contactToEdit.state = readline.question('Enter new State: ', { defaultInput: contactToEdit.state });
//     contactToEdit.zip = readline.question('Enter new Zip Code: ', { defaultInput: contactToEdit.zip });
//     contactToEdit.phoneNumber = readline.question('Enter new Phone Number: ', { defaultInput: contactToEdit.phoneNumber });
//     contactToEdit.email = readline.question('Enter new Email Address: ', { defaultInput: contactToEdit.email });
//     console.log('Contact updated successfully!');
//   } else {
//     console.log(`Contact not found for ${fName} ${lName}`);
//   }
// }
// const fNameToEdit = readline.question('Enter First Name of contact to edit: ');
// const lNameToEdit = readline.question('Enter Last Name of contact to edit: ');
// editContact(fNameToEdit, lNameToEdit);
//Use case 4
// import * as readlineSync from 'readline-sync';
// interface Data {
//   fName: string;
//   lName: string;
//   address: string;
//   city: string;
//   state: string;
//   zip: string;
//   phoneNumber: string;
//   email: string;
// }
// const contact: Data[] = [];
// function addContacts(): Data {
//   const fName = readline.question('Enter First Name: ');
//   const lName = readline.question('Enter Last Name: ');
//   const address = readline.question('Enter Address: ');
//   const city = readline.question('Enter City: ');
//   const state = readline.question('Enter State: ');
//   const zip = readline.question('Enter Zip Code: ');
//   const phoneNumber = readline.question('Enter Phone Number: ');
//   const email = readline.question('Enter Email Address: ');
//   const newContact: Data = {
//     fName,
//     lName,
//     address,
//     city,
//     state,
//     zip,
//     phoneNumber,
//     email,
//   };
//   return newContact;
// }
// function findContactByName(fName: string, lName: string): Data | undefined {
//   return contacts.find((contact) => contact.fName === fName && contact.lName === lName);
// }
// function editContact(fName: string, lName: string): void {
//   const contactToEdit = findContactByName(fName, lName);
//   if (contactToEdit) {
//     console.log(`Editing contact for ${fName} ${lName}`);
//     contactToEdit.address = readline.question('Enter new Address: ', { defaultInput: contactToEdit.address });
//     contactToEdit.city = readline.question('Enter new City: ', { defaultInput: contactToEdit.city });
//     contactToEdit.state = readline.question('Enter new State: ', { defaultInput: contactToEdit.state });
//     contactToEdit.zip = readline.question('Enter new Zip Code: ', { defaultInput: contactToEdit.zip });
//     contactToEdit.phoneNumber = readline.question('Enter new Phone Number: ', { defaultInput: contactToEdit.phoneNumber });
//     contactToEdit.email = readline.question('Enter new Email Address: ', { defaultInput: contactToEdit.email });
//     console.log('Contact updated successfully!');
//   } else {
//     console.log(`Contact not found for ${fName} ${lName}`);
//   }
// }
// function deleteContact(fName: string, lName: string): void {
//   const index = contacts.findIndex((contact) => contact.fName === fName && contact.lName === lName);
//   if (index !== -1) {
//     contacts.splice(index, 1);
//     console.log(`Contact ${fName} ${lName} deleted successfully.`);
//   } else {
//     console.log(`Contact ${fName} ${lName} not found.`);
//   }
// }
// // Add sample contacts (you can remove this later)
// contacts.push({
//   fName: "John",
//   lName: "Doe",
//   address: "123 Main St",
//   city: "Anytown",
//   state: "CA",
//   zip: "12345",
//   phoneNumber: "555-123-4567",
//   email: "john.doe@example.com",
// });
// contacts.push({
//   fName: "Jane",
//   lName: "Doe",
//   address: "456 Oak Ave",
//   city: "Anytown",
//   state: "CA",
//   zip: "56789",
//   phoneNumber: "555-456-7890",
//   email: "jane.doe@example.com",
// });
// // Get user input for deleting
// const fNameToDelete = readline.question('Enter First Name of contact to delete: ');
// const lNameToDelete = readline.question('Enter Last Name of contact to delete: ');
// deleteContact(fNameToDelete, lNameToDelete);
// use case 5
var readline = require("readline-sync");
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.contacts = [];
    }
    AddressBook.prototype.addContact = function () {
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
        this.contacts.push(newContact);
        console.log('Contact added successfully!');
    };
    AddressBook.prototype.listContacts = function () {
        if (this.contacts.length === 0) {
            console.log('No contacts found.');
        }
        else {
            console.log('Contacts:');
            this.contacts.forEach(function (contact, index) {
                console.log("".concat(index + 1, ". ").concat(contact.fName, " ").concat(contact.lName));
            });
        }
    };
    return AddressBook;
}());
var addressBook = new AddressBook();
while (true) {
    console.log('\nSelect an option:\n1. Add Contact\n2. List Contacts\n3. Exit');
    var choice = readline.question('Enter your choice: ');
    switch (choice) {
        case '1':
            addressBook.addContact();
            break;
        case '2':
            addressBook.listContacts();
            break;
        case '3':
            console.log('Exiting...');
            process.exit(0);
        default:
            console.log('Invalid choice. Please try again.');
    }
}
