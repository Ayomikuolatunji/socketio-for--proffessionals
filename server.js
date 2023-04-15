const express = require("express");
const path = require("path");
const publicPath = path.join(__dirname, "public");

const app = express();

app.use(express.static(publicPath));

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
