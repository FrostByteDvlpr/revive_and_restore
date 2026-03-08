// server.js for Heroku deployment of Angular app
const express = require("express");
const path = require("path");

const app = express();

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
