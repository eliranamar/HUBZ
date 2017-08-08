const express = require('express');
let bodyParser = require('body-parser')
let path = require('path');
const app = express();
let mysql = require('mysql');
let passport = require('./server/models/passport');

let authRoutes = require('./routes/authRoutes');
let tripRoutes = require('./routes/tripRoutes');

let expressJWT = require('express-jwt');
let ensureAuthenticated = expressJWT({ secret: 'Elirans$uperC0mpl3xKey1337' });

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());
// FACEBOOK
// passport initialize

app.use(passport.initialize());

const connection = mysql.createConnection({ 
  host: "localhost",
  user: "root",
  password: "aS908116",
  database: "routesss"
});


app.use('/auth', authRoutes);
app.use('/trip', tripRoutes);

// for finding 
app.post('/getnexthub', function (req, res) {
 console.log(req.body);
 // res.json(req.body);
 if (!req.body.hub) {
   res.send('no hub sent for search..')
   return;
 }
 let where = {
   name: req.body.hub
 }
 connection.query('SELECT country, locations.id, locations.name,lat,lng,trip_id,trips.name as trip_name FROM locations inner join trips on trips.id = locations.trip_id WHERE trip_id IN ( SELECT trip_id FROM locations WHERE ?)', where, function (err, result) {
   if (err) throw err;
   console.log(result);
   let obj  = {};
   for (let i = 0; i < result.length; i++) {
     if (obj[result[i].trip_id]) {
       obj[result[i].trip_id].locations.push(result[i]);
     } else {
       obj[result[i].trip_id] = {name: result[i].trip_name, locations: []};
       obj[result[i].trip_id].locations.push(result[i])
     }
   }
   let arr = []
   for (let id in obj) {
     arr.push(obj[id])
   }
   console.log(arr)
   res.send(arr);
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