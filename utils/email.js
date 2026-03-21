const nodemailer = require("nodemailer");

// Create reusable transporter
const createAlertTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.MAILERTOGO_SMTP_HOST,
    port: process.env.MAILERTOGO_SMTP_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAILERTOGO_SMTP_USER,
      pass: process.env.MAILERTOGO_SMTP_PASS,
    },
  });
};

// send contact alert email
const sendContactAlertEmail = async (
  email,
  name,
  message,
  inquiryType,
  phone,
) => {
  const transporter = createAlertTransporter();

  const mailOptions = {
    from: process.env.MAILERTOGO_FROM,
    to: process.env.MAILERTOGO_TO,
    subject: "New Contact Form Submission",
    text: `
      New contact form submission received:
      Name: ${name}
      Email: ${email}
      Message: ${message}
      Inquiry Type: ${inquiryType}
      Phone: ${phone}
    `,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Contact alert email sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending contact alert email:", error);
    throw error;
  }
};

// Send contact form confirmation email
const sendContactConfirmationEmail = async (email, name) => {
  const transporter = createAlertTransporter();

  const mailOptions = {
    from: `"Revive & Restore Reno" <projects@reviverestorereno.com>`,
    to: email,
    subject: "Thank You for Contacting Revive & Restore Reno",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.7; color: #333; background: #f7f8fd; }
            .container { max-width: 600px; margin: 0 auto; padding: 24px; background: #fff; border-radius: 12px; box-shadow: 0 4px 24px rgba(102,126,234,0.09); }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 28px; text-align: center; border-radius: 12px 12px 0 0; }
            .content { padding: 32px 24px; background-color: #f9f9f9; border-radius: 0 0 12px 12px; }
            .info-box { background-color: #e7f3ff; padding: 15px; border-left: 4px solid #667eea; margin: 20px 0; border-radius: 4px; }
            .footer { text-align: center; padding: 24px 0 0 0; font-size: 13px; color: #666; background: #f7f8fd; border-radius: 0 0 12px 12px; }
            .footer-contact { color: #667eea; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Message Received!</h1>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              <p>Thank you for reaching out to Revive & Restore Reno. We have received your message and appreciate you taking the time to contact us.</p>
              <div class="info-box">
                <p><strong>What happens next?</strong></p>
                <p>Our team will review your request and get in touch with you soon. We typically respond within 1-2 business days.</p>
              </div>
              <p>In the meantime, if you have any urgent questions, feel free to reach out to us directly:</p>
              <p>📧 <strong>Email:</strong> projects@reviverestorereno.com</p>
              <p>We look forward to working with you!</p>
              <p>Best regards,<br><strong>The Revive & Restore Reno Team</strong></p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Revive & Restore Reno. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      Message Received!
      
      Hi ${name},
      
      Thank you for reaching out to Revive & Restore Reno. We have received your message and appreciate you taking the time to contact us.
      
      What happens next?
      Our team will review your request and get in touch with you soon. We typically respond within 1-2 business days.
      
      In the meantime, if you have any urgent questions, feel free to reach out to us directly:
      
      Email: projects@reviverestorereno.com
      
      We look forward to working with you!
      
      Best regards,
      The Revive & Restore Reno Team
      
      © ${new Date().getFullYear()} Revive & Restore Reno. All rights reserved.
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Contact confirmation email sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending contact confirmation email:", error);
    throw error;
  }
};

module.exports = {
  sendContactAlertEmail,
  sendContactConfirmationEmail,
};
