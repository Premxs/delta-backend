
import express from "express";

const app = express();
let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {   //.get(path,callback function)
  res.send("Hello Iam root path");
});

app.get("/search", (req, res) => { //Search?q=Doom
  let { q } = req.query;
  res.send(`<h1>search results for query: ${q}</h1>`);
});

// app.get("/:username/:id", (req, res) => {
//   let { username, id } = req.params;
//   let htmlStr = `<h1>welcome to the page of @${username}!</h1>`
//   res.send(htmlStr);
// });

// app.get("/:username/:id", (req, res) => { //apnacollege/123
//   console.log(req.params);  //{username: "apnacollege", id: "123"}
//   res.send("hello, i am root");
// });

// app.get("/apple", (req, res) => {
//   res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//   res.send("you contacted orange path");
// });

// app.get(/(.*)/, (req, res) => {
//   res.send("this path does not exist");
// });

// app.post("/", (req, res) => {
//   res.send("you sent a post request");
// });

// app.use((req, res) => {  //listen for any request   //()=>{}--callback function
//   console.log("request received");
// //   res.send("this is a basic response");
// //   res.send({  //express automatically converts the object to JSON
// //   name: "apple",
// //   color: "red",
// // });
// let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
// res.send(code);
// });

