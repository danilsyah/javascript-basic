class Mail {
     _contacts = [];

     constructor(author) {
          this.from = author;
     }

     sendMessage(msg, to) {
          console.log("You Send :", msg, "to : ", to, "from : ", this.from);
          this._contacts.push(to);
     }

     showAllContacts() {
          return this._contacts;
     }
}

class WhatsApp extends Mail {
     // overriding constructor
     constructor(username, isBussinessAccount, phone) {
          super(phone);
          this.username = username;
          this.isBussinessAccount = isBussinessAccount;
     }

     // overriding method
     sendMessage(msg, to, attach) {
          super.sendMessage(msg, to);
          console.log("send by WA : ", msg, "attach : ", attach, "To :", to);
     }
}

// instansiasi Object
const WA1 = new WhatsApp("danil.syah", true, "085363008663");
WA1.sendMessage("hai bro", "0832121213", "image.png");
