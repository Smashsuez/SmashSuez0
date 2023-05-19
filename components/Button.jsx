import nodemailer from 'nodemailer';

const sendEmail = async () => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'yourgmail@gmail.com', // your gmail account
      pass: 'yourgmailpassword' // your gmail password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'yourgmail@gmail.com', // sender address
    to: 'mohamedahmedgameel@gmail.com', // list of receivers
    subject: 'New message from your application', // Subject line
    text: 'Hello, you have a new message from your application!' // plain text body
  });

  console.log('Message sent: %s', info.messageId);
};
