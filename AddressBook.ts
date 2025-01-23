// use case 1.
import * as readlineSync from 'readline-sync';

 interface Data {
   fName:string;
   lName:String;
   address:string;
   city:string;
   state:string;
   zip:string;
   phoneNumber:string;
   email:string
 }
 const contacts:Data[]=[]
 const contact:Data={
   fName:"kuber",
   lName:"Seth",
   address:"123 Model Town",
   city:"Patiala",
   state:"Punjab",
   zip:"1234",
   phoneNumber:"79541365",
   email:"kuber@gmial.com"
 }

 contacts.push(contact)
 console.log(contact);


