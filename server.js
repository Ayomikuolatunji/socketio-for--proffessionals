const express = require("express");
const path = require("path");
const http = require("http");
const publicPath = path.join(__dirname, "public");
const socketIO = require("socket.io");
const app = express();

app.use(express.static(publicPath));

let server = http.createServer(app);

let io = socketIO(server);

io.on("connection", (socket) => {
  console.log("A new user connected now");
  socket.on("disconnect", () => {
    console.log("The new user is disconnected");
  });
});

server.listen(8000, () => {
  console.log("Server running on port 8080");
});
