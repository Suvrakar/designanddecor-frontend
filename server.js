var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b6f56d6238fbfc",
    pass: "b570aadd53fc9a"
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