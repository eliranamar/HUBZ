const express = require('express');
let path = require('path');
const app = express();
let mysql = require('mysql')

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aS908116",
  database: "routesss"
});
connection.connect();

let q = connection.query("SELECT * from locations", function (err, rows, fields) {
  if (!err) {
    // console.log(fields);
    console.log(rows);
  } else console.log("Error while performing Query.");
});

console.log(q.sql); 

connection.end();
//Handle browser refresh by redirecting to index html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './server/static/index.html'))
})
// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});