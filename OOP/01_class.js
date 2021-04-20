// penulisan class bisa menggunakan sintaks class atau function

// cara 1
class Mail {
     from = "pengirim@gmail.com";
     sendMessage = function (msg, to) {
          console.log("you send : ", msg, "to", to, "from", this.from);
     };
}

const mail1 = new Mail();
mail1.sendMessage("Hallo", "penerima@gmal.com");

// =====================================================

// cara 2
function MailTest() {
     this.from = "pengirim@test.com";
     this.sendMessage = function (msg, to) {
          console.log("You send : ", msg, "to", to, "from : ", this.from);
     };
}

const mail2 = new MailTest();
mail2.sendMessage("halo", "penerima@test.com");
