// server.js for Heroku deployment of Angular app
const express = require("express");
const path = require("path");

const app = express();

// Serve static files from dist
app.use(express.static(path.join(__dirname, "dist")));

// All other routes should redirect to the Angular app
app.get(/(.*)/, (req, res) => {
  if (!req.path.includes(".")) {
    res.sendFile(
      path.join(__dirname, "dist/dev_sec_consulting/browser/index.html"),
    );
  } else {
    res.status(404).end();
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
