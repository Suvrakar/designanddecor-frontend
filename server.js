var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
  host: "mail.thedesignanddecor.org",
  port: 465,  
  auth: {
    user: "info@thedesignanddecor.org",
    pass: "thedesignanddecor"
  }
});

var mailOptions = {
  from: '"Example Team" <from@example.com>',
  to: 'kar.suvra@gmail.com',
  subject: 'Mail from a client',
  text: 'Hello',
};



module.exports =  function sendMail(mailBody=mailOptions){
   transport.sendMail(mailBody, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
}