/* 
Enkapsulasi adalah kondisi di mana attribute atau method di dalam class dibungkus dan bersifat privat. 
Artinya objek lain tidak bisa mengakses atau mengubah nilai dari property secara langsung. */

class Mail {
     _contacts = []; //private variabel
     constructor(author) {
          this.from = author; //variabel global
     }

     // method
     sendMessage = function (msg, to) {
          console.log("you send: ", msg, "to", to, "from ", this.from);
          this._contacts.push(to);
     };
     //  method
     showAllContacts() {
          return this._contacts;
     }
}

// instansiasi object
const mail = new Mail("danil@bbt.co.id");

mail.sendMessage("hai apa kabar ?", "udin@gmail.com");
mail.sendMessage("kabar saya baik", "fika@gmail.com");
const showallcontacts = mail.showAllContacts();

console.log(showallcontacts);
