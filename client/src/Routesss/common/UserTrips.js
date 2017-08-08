import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class UserTrips extends React.Component {
	constructor(props) {
		super(props);
		// console.log(props.user);

		this.findUserTrips = this.findUserTrips.bind(this);
	}

	findUserTrips() {
		console.log("ahh good");
		axios
			.get("/trip/usertrips/" + this.props.user.id)
			.then(function(response) {
				// console.log('testttt');
				console.log(response.data);
				// that.setState({ trips: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	render() {
		console.log(this.props.user);
		return (
			<div className="container text-center center-block">
				<h2>Your trips</h2>
				<button
					className="btn btn-warning btn-square"
					onClick={this.findUserTrips}
				>
					Show Me My Trips!
				</button>
			</div>
		);
	}
}

export default UserTrips;
