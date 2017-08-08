let passport = require("passport");
let jwt = require("jsonwebtoken");
let mysql = require("mysql");
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "aS908116",
	database: "routesss"
});

//passport configuration here
let FacebookStrategy = require("passport-facebook").Strategy;

passport.use(
	new FacebookStrategy(
		{
			clientID: "1754732204824550",
			clientSecret: "44452c1af71afa83f479f7d0f9cd3d35",
			callbackURL: "http://localhost:3000/auth/facebook/callback",
			profileFields: ["email", "displayName", "picture"]
		},
		function(accessToken, refreshToken, profile, done) {
			console.log("RESPONSE FROM PASSPORT.JS");
			console.log(JSON.stringify(profile));
			console.log("FACEBOOK");
			//code to check database goes here
			let response = {};
			let where = {
				id: profile.id
			};

			connection.query("SELECT * FROM users WHERE ?", where, function(
				err,
				result
			) {
				if (err) throw err;

				if (!result.length) {
					let user = {
						id: profile.id,
						name: profile.displayName,
						email: profile.emails ? profile.emails[0].value : "",
						profile_pic: profile.photos ? profile.photos[0].value : ""
					};
					connection.query("INSERT INTO users SET ?", user, function(
						err,
						result
					) {
						if (err) throw err;
						console.log(result);
						let tokenid = jwt.sign(
							{
								id: result[0].id,
								name: result[0].name
							},
							"Elirans$uperC0mpl3xKey1337",
							{ expiresIn: "14d" }
						);
						return done(null, {
							token: tokenid,
							name: result[0].name,
							id: result[0].id
						});
					});
				} else {
					console.log("found user:");
					console.log(result[0]);
					console.log(result[0].name);
					console.log(result[0].id);
					console.log("user exists already");
					let tokenid = jwt.sign(
						{
							id: result[0].id,
							name: result[0].name
						},
						"Elirans$uperC0mpl3xKey1337",
						{ expiresIn: "14d" }
					);
					return done(null, {
						token: tokenid,
						name: result[0].name,
						id: result[0].id
					});
				}
			});
		}
	)
);

module.exports = passport;
