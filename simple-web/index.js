const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello There! How was your day");
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
