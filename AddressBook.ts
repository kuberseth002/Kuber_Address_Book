// // use case 1.
// import * as readlineSync from 'readline-sync';

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


import * as readline from 'readline-sync';

interface Data {
  fName: string;
  lName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phoneNumber: string;
  email: string;
}

const contacts: Data[] = [];

function addContact(): Data {
  const fName = readline.question('Enter First Name: ');
  const lName = readline.question('Enter Last Name: ');
  const address = readline.question('Enter Address: ');
  const city = readline.question('Enter City: ');
  const state = readline.question('Enter State: ');
  const zip = readline.question('Enter Zip Code: ');
  const phoneNumber = readline.question('Enter Phone Number: ');
  const email = readline.question('Enter Email Address: ');

  const newContact: Data = {
    fName,
    lName,
    address,
    city,
    state,
    zip,
    phoneNumber,
    email,
  };

  return newContact;
}

function findContactByName(fName: string, lName: string): Data | undefined {
  return contacts.find((contact) => contact.fName === fName && contact.lName === lName);
}

function editContact(fName: string, lName: string): void {
  const contactToEdit = findContactByName(fName, lName);

  if (contactToEdit) {
    console.log(`Editing contact for ${fName} ${lName}`);

    contactToEdit.address = readline.question('Enter new Address: ', { defaultInput: contactToEdit.address });
    contactToEdit.city = readline.question('Enter new City: ', { defaultInput: contactToEdit.city });
    contactToEdit.state = readline.question('Enter new State: ', { defaultInput: contactToEdit.state });
    contactToEdit.zip = readline.question('Enter new Zip Code: ', { defaultInput: contactToEdit.zip });
    contactToEdit.phoneNumber = readline.question('Enter new Phone Number: ', { defaultInput: contactToEdit.phoneNumber });
    contactToEdit.email = readline.question('Enter new Email Address: ', { defaultInput: contactToEdit.email });

    console.log('Contact updated successfully!');
  } else {
    console.log(`Contact not found for ${fName} ${lName}`);
  }
}


const fNameToEdit = readline.question('Enter First Name of contact to edit: ');
const lNameToEdit = readline.question('Enter Last Name of contact to edit: ');

editContact(fNameToEdit, lNameToEdit);


//Use case 4

