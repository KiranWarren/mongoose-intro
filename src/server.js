// Server configuration happens in server.js

// Import express.js
const express = require("express");

// Create server instance
const app = express();

app.get("/", (request, response) => {
  response.json({
    message: "Hello World",
  });
});

module.exports = {
  app,
};
