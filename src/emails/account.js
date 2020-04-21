const sgMail = require("@sendgrid/mail");

const SENDGRID_API_KEY =
  "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";
sgMail.setApiKey(SENDGRID_API_KEY);

const msg = {
  to: "erncncbk@gmail.com",
  from: "erncncbk@gmail.com",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail.send(msg).then(
  () => {},
  (error) => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
);
