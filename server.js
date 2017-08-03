const express = require('express');
var bodyParser = require('body-parser')
let path = require('path');
const app = express();
let mysql = require('mysql')

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aS908116",
  database: "routesss"
});

// let q = connection.query("SELECT * from locations", function (err, rows, fields) {
//   if (!err) {
//     // console.log(fields);
//     console.log(rows);
//   } else console.log("Error while performing Query.");
// });

// console.log(q.sql);

app.get('/trip/:id', function (req, res) {
  let where = {
    trip_id: req.params.id
  }


  connection.query('SELECT * FROM locations WHERE ?', where, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post('/getnexthub', function(req,res){
  console.log(req.body);
  res.json(req.body);
})

app.post('/trip/:trip_id/addlocation', function (req, res) {
  console.log(req.body);
  // res.json(req.body);
  let location = req.body;


  connection.query('INSERT INTO locations SET ?', location, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post('/trip', function (req, res) {
  let trip = req.body;

  console.log(trip);
  // connection.connect();
  if (!trip.name || !trip.type) {
    res.send('Please fill trip data correctly');
  }

  connection.query('INSERT INTO trips SET ?', trip, function (err, result) {
    if (err) throw err;
    console.log("id: ", result.insertId);

    // connection.end();
    res.send(result);
  });
})



//Handle browser refresh by redirecting to index html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './server/static/index.html'))
})
// connection.end();
// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});