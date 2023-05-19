// import the nodemailer package
import nodemailer from "nodemailer";

// create a nodemailer transporter object with your email account credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your_email_password",
  },
});

// define a function to send an email to the admin when the Order button is clicked
export const sendContactForm = (data) => {
  // define the email message that will be sent to the admin
  const message = {
    from: "your_email@gmail.com",
    to: "admin_email@gmail.com",
    subject: "New order placed",
    text: `${data}`,
    html: `${data}`,
  };

  // send the email message using the nodemailer transporter object
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
