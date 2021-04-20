// Cara 1
class Mail {
     // atribute / properti
     from = "pengirim@dicoding.com";
     contacts = [];

     // method
     sendMessage = function (msq, to, from) {
          console.log("you send: ", msq, "to", to, "from", from);
          this.contacts.push(to);
     };
}

// cara 2
function Mail1() {
     // atribut / properti
     this.from = "sipengirim@dicoding.com";
     this.contacts = [];

     // method
     this.sendMessage = function (msg, to) {
          console.log("You send:", msg, "to", to, "from", this.from);
          this.contacts.push(to); //menyimpan data kontak baru
     };
}

const mail1 = new Mail(); //instansiasi object
mail1.sendMessage("Hallo", "penerima@dicoding", "aku@gmail.com");
mail1.sendMessage("Hallo", "udin@dicoding", "aku@gmail.com");
console.log(mail1.contacts);

const mail2 = new Mail1(); //instansiasi object
mail2.sendMessage("hai danil", "danilsyah@bbt.co.id");
mail2.sendMessage("hai apa kabar", "haykal@bbt.co.id");
console.log(mail2.contacts);

// ===================================================================
/*  JavaScript sendiri terdapat 2 jenis akses identifier untuk sebuah field:
Public : dapat diakses dari mana pun.
Private : hanya dapat diakses dari dalam kelas itu sendiri. */

// atribute contact menjadi private
_contacts = [];
class Mail3 {
     from = "yangngirim@dicoding.com"; //public variabel
     _contacts = []; //private variabel

     sendMessage = function (msg, to) {
          console.log("you send:", msg, "to", to, "from : ", this.from);
          this._contacts.push(to);
     };

     inboxMessage = function (msq, from) {
          console.log("you inbox : ", msq, "from", from);
     };

     showContacts = function () {
          console.log(this._contacts);
     };
}

const mail3 = new Mail3();
console.log(mail3.contacts); //undefined
mail3.sendMessage("hail", "goku@gmail.com");
mail3.sendMessage("hail", "vegeta@gmail.com");
mail3.inboxMessage("kapan kamu masuk nil", "udin@mail.com");
mail3.showContacts();

// static method class
class Mail4 {
     static isValidPhone(phone) {
          return typeof phone === "number";
     }
}

console.log(Mail4.isValidPhone(085363008663));

// constructor
// cara menggunakan class
class Mail5 {
     constructor(author) {
          this.from = "pengirim@dicoding.com";
          console.log("is instantiated", author);
     }
}

// cara menggunakan function
function Mail6(author) {
     this.from = author;
     console.log("is instantiated", author);
}

// cara pemanggilan constructor
const mail5 = new Mail5("danilsyaharihardjo@gmail.com");
const mail6 = new Mail6(0812344566);
