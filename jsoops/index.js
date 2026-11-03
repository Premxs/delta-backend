const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true })); //parse incoming post request body
app.use(express.json()); // Allow express to read json data from the request body

app.get("/register", (req, res) => {
  let { user, password } = req.query;
  res.send(`standard GET response. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
  let { user, password } = req.body;  // mostly used in database for storing user data
  res.send(`standard POST response. Welcome ${user}!`);
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});