/*
Beberapa objek bisa memiliki beberapa karakteristik atau perilaku yang sama, 
tetapi mereka bukanlah objek yang sama. Di sinilah inheritance atau pewarisan berperan. 
*/

// parent class
class Mail {
     _contacts = [];

     constructor(author) {
          this.from = author;
     }

     sendMessage = function (msg, to) {
          console.log("you send :", msg, "to :", to, "from :", this.from);
          this._contacts.push(to);
     };

     showAllContacts() {
          return this._contacts;
     }
}

// child class menggunakan statement class
class WhatsApp extends Mail {
     username = "danil";
     isBussinessAccount = false;

     myProfile = function () {
          return `my name is ${this.username}, is ${
               this.isBussinessAccount ? "Business" : "Personal" //if ternary
          }`;
     };
}

// child class menggunakan statement function
class Email extends Mail {
     _label = [];
     name = "danilsyah";

     sendDocument(urlDoc, recipient) {
          console.log(
               "url :",
               urlDoc,
               "name : ",
               this.name,
               "recipient : ",
               recipient
          );
          this._label.push(recipient);
     }

     showAllLabel() {
          return this._label;
     }
}

const wa1 = new WhatsApp(6285363008663);
wa1.sendMessage("hai bro, apa kabar ?", 628321212121);
console.log(wa1.myProfile());

const email = new Email("danilsyah@gmail.com");
email.sendMessage("bro ini file nya ya", "udin@gmail.com");
email.sendDocument("https://file.com", "udin@gmail.com");

email.sendMessage("bro ini file nya ya", "udin@gmail.com");
email.sendDocument("https://file.com", "udin@gmail.com");
console.log(email.showAllLabel());
