let express = require("express");
let mysql = require("mysql");
let expressJWT = require("express-jwt");
let ensureAuthenticated = expressJWT({
	secret: "Elirans$uperC0mpl3xKey1337"
});
let router = express.Router();

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1234",
	database: "routesss"
});

//TODO : need to add user id into trip database.
router.post("/addtrip", ensureAuthenticated, function(req, res) {
	let trip = req.body;

	console.log(trip);
	// connection.connect();
	if (!trip.name || !trip.type) {
		return res.send("Please fill trip data correctly");
	}

	connection.query("INSERT INTO trips SET ?", trip, function(err, result) {
		if (err) throw err;
		console.log("id: ", result.insertId);

		// connection.end();
		res.send(result);
	});
});

//? need to add user id?? maybe not
router.post("/:trip_id/addlocation", ensureAuthenticated, function(req, res) {
	console.log(req.body);
	// res.json(req.body);
	let location = req.body;

	connection.query("INSERT INTO locations SET ?", location, function(
		err,
		result
	) {
		if (err) throw err;
		console.log(result);
		res.send(result);
	});
});

//get trip by id
router.get("/trips/:trip_id", ensureAuthenticated, function(req, res) {
	let where = {
		trip_id: req.params.trip_id
	};
	connection.query("SELECT * FROM locations WHERE ?", where, function(
		err,
		result
	) {
		if (err) throw err;
		console.log(result);
		res.send(result);
	});
});

//TODO get all the user trips by his id... and add component for user trips
router.get("/usertrips/:user_id", ensureAuthenticated, function(req, res) {
	console.log(req.params.user_id);
	let where = {
		user_id: req.params.user_id
	};
	connection.query("SELECT country,    locations.id,    locations.name,    lat,    lng,    trip_id,    trips.name AS trip_name FROM  locations        INNER JOIN    trips ON trips.id = locations.trip_id WHERE ?", where, function(err, result) {
		if (err) throw err;
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
});

module.exports = router;
