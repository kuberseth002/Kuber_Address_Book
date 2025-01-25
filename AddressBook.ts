// // use case 1.
//  import * as readlineSync from 'readline-sync';

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


// import * as readline from 'readline-sync';

// interface Contact {
//   fName: string;
//   lName: string;
//   address: string;
//   city: string;
//   state: string;
//   zip: string;
//   phoneNumber: string;
//   email: string;
// }

// class AddressBook {
//   private contacts: Contact[] = [];

//   addContact(): void {
//     const fName = readline.question('Enter First Name: ');
//     const lName = readline.question('Enter Last Name: ');
//     const address = readline.question('Enter Address: ');
//     const city = readline.question('Enter City: ');
//     const state = readline.question('Enter State: ');
//     const zip = readline.question('Enter Zip Code: ');
//     const phoneNumber = readline.question('Enter Phone Number: ');
//     const email = readline.question('Enter Email Address: ');

//     const newContact: Contact = {
//       fName,
//       lName,
//       address,
//       city,
//       state,
//       zip,
//       phoneNumber,
//       email,
//     };

//     this.contacts.push(newContact);
//     console.log('Contact added successfully!');
//   }

//   listContacts(): void {
//     if (this.contacts.length === 0) {
//       console.log('No contacts found.');
//     } else {
//       console.log('Contacts:');
//       this.contacts.forEach((contact, index) => {
//         console.log(`${index + 1}. ${contact.fName} ${contact.lName}`);
//       });
//     }
//   }
// }

// const addressBook = new AddressBook();

// while (true) {
//   console.log('\nSelect an option:\n1. Add Contact\n2. List Contacts\n3. Exit');
//   const choice = readline.question('Enter your choice: ');

//   switch (choice) {
//     case '1':
//       addressBook.addContact();
//       break;
//     case '2':
//       addressBook.listContacts();
//       break;
//     case '3':
//       console.log('Exiting...');
//       process.exit(0);
//     default:
//       console.log('Invalid choice. Please try again.');
//   }
// }


//use case 6

// import * as readlineSync from "readline-sync";

// // Define the structure of a Contact
// class Contact {
//   firstName: string;
//   lastName: string;
//   address: string;
//   city: string;
//   state: string;
//   zip: string;
//   phoneNumber: string;
//   email: string;

//   constructor(
//     firstName: string,
//     lastName: string,
//     address: string,
//     city: string,
//     state: string,
//     zip: string,
//     phoneNumber: string,
//     email: string
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.address = address;
//     this.city = city;
//     this.state = state;
//     this.zip = zip;
//     this.phoneNumber = phoneNumber;
//     this.email = email;
//   }
// }

// // Define a class for the Address Book
// class AddressBook {
//   private contacts: Contact[] = []; // Array to store the contacts

//   // Add a new contact to the address book
//   addContact(): void {
//     const firstName = readlineSync.question("Enter First Name: ");
//     const lastName = readlineSync.question("Enter Last Name: ");
//     const address = readlineSync.question("Enter Address: ");
//     const city = readlineSync.question("Enter City: ");
//     const state = readlineSync.question("Enter State: ");
//     const zip = readlineSync.question("Enter Zip Code: ");
//     const phoneNumber = readlineSync.question("Enter Phone Number: ");
//     const email = readlineSync.question("Enter Email: ");

//     const newContact = new Contact(
//       firstName,
//       lastName,
//       address,
//       city,
//       state,
//       zip,
//       phoneNumber,
//       email
//     );

//     this.contacts.push(newContact);
//     console.log("Contact added successfully!");
//   }

//   // Display all contacts in the address book
//   displayContacts(): void {
//     if (this.contacts.length === 0) {
//       console.log("No contacts found in this address book.");
//       return;
//     }

//     console.log("\nContacts in this Address Book:");
//     this.contacts.forEach((contact, index) => {
//       console.log(
//         `${index + 1}. ${contact.firstName} ${contact.lastName}, ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, ${contact.phoneNumber}, ${contact.email}`
//       );
//     });
//   }
// }

// // Define a class to manage multiple address books
// class AddressBookSystem {
//   private addressBooks: { [name: string]: AddressBook } = {}; // Dictionary to store address books by name

//   // Add a new address book to the system
//   addAddressBook(): void {
//     const name = readlineSync.question("Enter a unique name for the Address Book: ");

//     if (this.addressBooks[name]) {
//       console.log("An Address Book with this name already exists.");
//       return;
//     }

//     this.addressBooks[name] = new AddressBook();
//     console.log(`Address Book "${name}" created successfully!`);
//   }

//   // Select an address book and perform operations
//   selectAddressBook(): void {
//     const name = readlineSync.question("Enter the name of the Address Book to select: ");

//     if (!this.addressBooks[name]) {
//       console.log("No Address Book found with this name.");
//       return;
//     }

//     console.log(`Address Book "${name}" selected.`);
//     const addressBook = this.addressBooks[name];

//     while (true) {
//       console.log("\nOptions:");
//       console.log("1. Add a Contact");
//       console.log("2. Display Contacts");
//       console.log("3. Go Back");

//       const choice = readlineSync.question("Choose an option: ");

//       switch (choice) {
//         case "1":
//           addressBook.addContact();
//           break;
//         case "2":
//           addressBook.displayContacts();
//           break;
//         case "3":
//           return; // Exit the current address book menu
//         default:
//           console.log("Invalid choice. Please try again.");
//       }
//     }
//   }

//   // Display all address books
//   displayAllAddressBooks(): void {
//     const addressBookNames = Object.keys(this.addressBooks);

//     if (addressBookNames.length === 0) {
//       console.log("No Address Books found.");
//       return;
//     }

//     console.log("\nAddress Books in the system:");
//     addressBookNames.forEach((name, index) => {
//       console.log(`${index + 1}. ${name}`);
//     });
//   }
// }

// // Main program
// const addressBookSystem = new AddressBookSystem();

// while (true) {
//   console.log("\nMain Menu:");
//   console.log("1. Add a New Address Book");
//   console.log("2. Select an Address Book");
//   console.log("3. Display All Address Books");
//   console.log("4. Exit");

//   const mainChoice = readlineSync.question("Choose an option: ");

//   switch (mainChoice) {
//     case "1":
//       addressBookSystem.addAddressBook();
//       break;
//     case "2":
//       addressBookSystem.selectAddressBook();
//       break;
//     case "3":
//       addressBookSystem.displayAllAddressBooks();
//       break;
//     case "4":
//       console.log("Exiting the program. Goodbye!");
//       process.exit(0);
//     default:
//       console.log("Invalid choice. Please try again.");
//   }
// }



//use case 7

// import * as readline from 'readline-sync';

// interface Contact {
//   fName: string;
//   lName: string;
//   address: string;
//   city: string;
//   state: string;
//   zip: string;
//   phoneNumber: string;
//   email: string;
// }

//  class AddressBook {
//  contacts: Contact[] = [];

//   constructor(name: string) {}

//   addContact(): void {
//     const fName = readline.question('Enter First Name: ');
//     const lName = readline.question('Enter Last Name: ');

//     // Check for duplicate contacts
//     if (this.contacts.some((contact) => contact.fName === fName && contact.lName === lName)) {
//       console.log(`Contact with the name ${fName} ${lName} already exists in this address book.`);
//       return;
//     }

//     const address = readline.question('Enter Address: ');
//     const city = readline.question('Enter City: ');
//     const state = readline.question('Enter State: ');
//     const zip = readline.question('Enter Zip Code: ');
//     const phoneNumber = readline.question('Enter Phone Number: ');
//     const email = readline.question('Enter Email Address: ');

//     const newContact: Contact = {
//       fName,
//       lName,
//       address,
//       city,
//       state,
//       zip,
//       phoneNumber,
//       email,
//     };

//     this.contacts.push(newContact);
//     console.log('Contact added successfully!');
//   }
// }


//use case 8

// import * as readline from 'readline-sync';

// interface Contact {
//   fName: string;
//   lName: string;
//   address: string;
//   city: string;
//   state: string;
//   zip: string;
//   phoneNumber: string;
//   email: string;
// }

// class AddressBook {
//   private contacts: Contact[] = [];

//   constructor(public name: string) {}

//   addContact(): void {
//     const fName = readline.question('Enter First Name: ');
//     const lName = readline.question('Enter Last Name: ');

//     // Check for duplicate contact within the same address book
//     if (this.contacts.some((contact) => contact.fName === fName && contact.lName === lName)) {
//       console.log(`Contact with the name ${fName} ${lName} already exists in this address book.`);
//       return;
//     }

//     const address = readline.question('Enter Address: ');
//     const city = readline.question('Enter City: ');
//     const state = readline.question('Enter State: ');
//     const zip = readline.question('Enter Zip Code: ');
//     const phoneNumber = readline.question('Enter Phone Number: ');
//     const email = readline.question('Enter Email Address: ');

//     const newContact: Contact = {
//       fName,
//       lName,
//       address,
//       city,
//       state,
//       zip,
//       phoneNumber,
//       email,
//     };

//     this.contacts.push(newContact);
//     console.log('Contact added successfully!');
//   }

//   listContacts(): void {
//     if (this.contacts.length === 0) {
//       console.log('No contacts found.');
//     } else {
//       console.log(`Contacts in ${this.name}:`);
//       this.contacts.forEach((contact, index) => {
//         console.log(`${index + 1}. ${contact.fName} ${contact.lName}`);
//       });
//     }
//   }

//   findContactsByCityOrState(city: string, state: string): Contact[] {
//     return this.contacts.filter(
//       (contact) => contact.city.toLowerCase() === city.toLowerCase() || contact.state.toLowerCase() === state.toLowerCase()
//     );
//   }
// }

// const addressBooks: Map<string, AddressBook> = new Map();

// while (true) {
//   console.log('\nSelect an option:\n1. Create New Address Book\n2. Select Address Book\n3. Search Contacts\n4. Exit');
//   const choice = readline.question('Enter your choice: ');

//   switch (choice) {
//     case '1':
//       break;
//     case '2':
//       break;
//     case '3':
//       const searchCity = readline.question('Enter City');
//       const searchState = readline.question('Enter State');

//       let foundContacts: Contact[] = [];

//       for (const [addressBookName, addressBook] of addressBooks) {
//         foundContacts = foundContacts.concat(addressBook.findContactsByCityOrState(searchCity, searchState));
//       }

//       if (foundContacts.length > 0) {
//         console.log('Contacts found:');
//         foundContacts.forEach((contact, index) => {
//           console.log(`${index + 1}. ${contact.fName} ${contact.lName} - ${contact.city}, ${contact.state}`);
//         });
//       } else {
//         console.log('No contacts found in the specified city or state.');
//       }
//       break;
//     case '4':
//       console.log('Exiting...');
//       process.exit(0);
//     default:
//       console.log('Invalid choice. Please try again.');
//   }
// }

//use case 9

import * as readline from 'readline-sync';

interface Contact {
  fName: string;
  lName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phoneNumber: string;
  email: string;
}

class AddressBook {
  private contacts: Contact[] = [];

  constructor(public name: string) {}

  addContact(): void {
    const fName = readline.question('Enter First Name: ');
    const lName = readline.question('Enter Last Name: ');
    const address = readline.question('Enter Address: ');
    const city = readline.question('Enter City: ');
    const state = readline.question('Enter State: ');
    const zip = readline.question('Enter Zip Code: ');
    const phoneNumber = readline.question('Enter Phone Number: ');
    const email = readline.question('Enter Email Address: ');

    const newContact: Contact = {
      fName,
      lName,
      address,
      city,
      state,
      zip,
      phoneNumber,
      email,
    };

    this.contacts.push(newContact);
    console.log('Contact added successfully!');
  }

 
  findContactsByCityOrState(city: string, state: string): Contact[] {
    return this.contacts.filter(
      (contact) => contact.city.toLowerCase() === city.toLowerCase() || contact.state.toLowerCase() === state.toLowerCase()
    );
  }
}

const addressBooks: Map<string, AddressBook> = new Map();

while (true) {
  console.log('\nSelect an option:\n1. Create New Address Book\n2. Select Address Book\n3. View Contacts by City/State\n4. Exit');
  const choice = readline.question('Enter your choice: ');

  switch (choice) {
    case '1':
      const addressBookName = readline.question('Enter Address Book Name: ');
      if (!addressBooks.has(addressBookName)) {
        addressBooks.set(addressBookName, new AddressBook(addressBookName));
        console.log(`Address Book '${addressBookName}' created successfully.`);
      } else {
        console.log(`Address Book '${addressBookName}' already exists.`);
      }
      break;
    case '2':
      const selectedBook = readline.question('Enter Address Book Name to select: ');
      if (addressBooks.has(selectedBook)) {
        const selectedAddressBook = addressBooks.get(selectedBook)!; 

        while (true) {
          console.log(`\nSelected Address Book: ${selectedBook}`);
          console.log('Select an option:\n1. Add Contact\n2. List Contacts\n3. Back');
          const innerChoice = readline.question('Enter your choice: ');

          switch (innerChoice) {
            case '1':
              selectedAddressBook.addContact();
              break;
            case '2':
              selectedAddressBook.listContacts();
              break;
            case '3':
              break; // Go back to main menu
            default:
              console.log('Invalid choice. Please try again.');
          }

          if (innerChoice === '3') {
            break; // Exit inner loop
          }
        }
      } else {
        console.log(`Address Book '${selectedBook}' not found.`);
      }
      break;
    case '3':
      // ... (View Contacts by City/State logic as before)
      break;
    case '4':
      console.log('Exiting...');
      process.exit(0);
    default:
      console.log('Invalid choice. Please try again.');
  }
}