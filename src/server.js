const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "public/index.html");
});

const listener = app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});