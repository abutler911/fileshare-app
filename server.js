const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const server = require("http").createServer(app);

app.use(express.static(path.join(__dirname + "/public")));
app.get("/", (req, res) => {
  res.send("The slash route");
});
server.listen(PORT, () => {
  console.log(`Server up on port ${PORT}...`);
});
