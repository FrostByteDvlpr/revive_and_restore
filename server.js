const express = require("express");
const path = require("path");
const {
  sendContactAlertEmail,
  sendContactConfirmationEmail,
} = require("./utils/email");
const app = express();
const cors = require("cors");

const corsOpts = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "https://reviverestorereno.com",
      "https://www.reviverestorereno.com",
      "https://revive-and-restore-4294f71fab38.herokuapp.com/",
      "http://localhost:4200",
      "http://localhost:5000",
    ];
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOpts));

// Load environment variables from .env in development
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// Nodemailer setup
const nodemailer = require("nodemailer");

// MailerToGo (Heroku add-on) config from env vars

const mailUser = process.env.MAILERTOGO_SMTP_USER;
const mailPass = process.env.MAILERTOGO_SMTP_PASS;
const mailHost = process.env.MAILERTOGO_SMTP_HOST;
const mailPort = process.env.MAILERTOGO_SMTP_PORT || 587;

const transporter = nodemailer.createTransport({
  host: mailHost,
  port: mailPort,
  secure: false, // true for 465, false for other ports
  auth: {
    user: mailUser,
    pass: mailPass,
  },
});

app.use(express.json());

// Contact form route
app.post("/api/contact", async (req, res) => {
  const { name, email, message, inquiryType, phone } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }
  // Send alert email to site admins
  try {
    await sendContactAlertEmail(name, email, message, inquiryType, phone);
  } catch (alertError) {
    console.error("Failed to send contact alert email:", alertError);
  }

  // Send confirmation email to user
  try {
    await sendContactConfirmationEmail(email, name);
    res.status(201).json({
      message: "Contact confirmation email sent successfully.",
      success: true,
    });
  } catch (emailError) {
    console.error("Failed to send contact confirmation email:", emailError);
    // User created but email failed
    res.status(201).json({
      message:
        "Successful contact submission but failed to send contact confirmation email. Please resend.",
      success: true,
      emailError: true,
    });
  }
});

// Serve static files from the correct Angular dist directory
const distPath = path.join(__dirname, "dist", "revive_restore_reno", "browser");
app.use(express.static(distPath));

// For all GET requests, send back index.html so that PathLocationStrategy can be used
app.get(/(.*)/, (req, res) => {
  if (!req.path.includes(".")) {
    res.sendFile(
      path.join(__dirname, "dist/revive_restore_reno/browser/index.html"),
    );
  } else {
    res.status(404).end();
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
