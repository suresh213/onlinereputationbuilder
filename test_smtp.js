const nodemailer = require('nodemailer');

async function testSMTP() {
  console.log("Testing SMTP connection to:", "smtp.unosend.co");
  
  const transporter = nodemailer.createTransport({
    host: "smtp.unosend.co",
    port: 587,
    secure: false, 
    auth: {
      user: "unosend",
      pass: "un_X0IZHLH13K5WJ2I3YI00ZJKZ3I0KH3LY",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Lead Alert Test" <contact@onlinereputationbuilders.in>`,
      to: "contact@onlinereputationbuilders.in",
      subject: "Test Notification from System",
      text: "If you see this, your SMTP configuration is working perfectly!",
    });
    console.log("Success! Email sent. Message ID:", info.messageId);
  } catch (error) {
    console.error("Failed to send email. Check credentials or network:", error);
  }
}

testSMTP();
