// // use case 1.
//  import * as readlineSync from 'readline-sync';
var contact = [];
function addContacts() {
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
function findContactByName(fName, lName) {
    return contacts.find(function (contact) { return contact.fName === fName && contact.lName === lName; });
}
function editContact(fName, lName) {
    var contactToEdit = findContactByName(fName, lName);
    if (contactToEdit) {
        console.log("Editing contact for ".concat(fName, " ").concat(lName));
        contactToEdit.address = readline.question('Enter new Address: ', { defaultInput: contactToEdit.address });
        contactToEdit.city = readline.question('Enter new City: ', { defaultInput: contactToEdit.city });
        contactToEdit.state = readline.question('Enter new State: ', { defaultInput: contactToEdit.state });
        contactToEdit.zip = readline.question('Enter new Zip Code: ', { defaultInput: contactToEdit.zip });
        contactToEdit.phoneNumber = readline.question('Enter new Phone Number: ', { defaultInput: contactToEdit.phoneNumber });
        contactToEdit.email = readline.question('Enter new Email Address: ', { defaultInput: contactToEdit.email });
        console.log('Contact updated successfully!');
    }
    else {
        console.log("Contact not found for ".concat(fName, " ").concat(lName));
    }
}
function deleteContact(fName, lName) {
    var index = contacts.findIndex(function (contact) { return contact.fName === fName && contact.lName === lName; });
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log("Contact ".concat(fName, " ").concat(lName, " deleted successfully."));
    }
    else {
        console.log("Contact ".concat(fName, " ").concat(lName, " not found."));
    }
}
// Add sample contacts (you can remove this later)
contacts.push({
    fName: "John",
    lName: "Doe",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    phoneNumber: "555-123-4567",
    email: "john.doe@example.com",
});
contacts.push({
    fName: "Jane",
    lName: "Doe",
    address: "456 Oak Ave",
    city: "Anytown",
    state: "CA",
    zip: "56789",
    phoneNumber: "555-456-7890",
    email: "jane.doe@example.com",
});
// Get user input for deleting
var fNameToDelete = readline.question('Enter First Name of contact to delete: ');
var lNameToDelete = readline.question('Enter Last Name of contact to delete: ');
deleteContact(fNameToDelete, lNameToDelete);
