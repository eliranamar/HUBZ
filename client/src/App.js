import React from "react";
import ReactDom from "react-dom";
import axios from "axios";
import Header from "./Routesss/common/Header";
import Routesss from "./Routes";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			trip: {
				name: null,
				type: null,
				id: null
			},
			user: {}
		};
		console.log(this.state.user);
		this.setTripState = this.setTripState.bind(this);
	}
	componentDidMount() {
		let that = this;
		(function() {
			let user = JSON.parse(localStorage.getItem("user"));
			if (user.token) {
				that.setState({ user: user });
				axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
			} else {
				axios.defaults.headers.common["Authorization"] = null;
				/*if setting null does not remove `Authorization` header then try     
           delete axios.defaults.headers.common['Authorization'];
         */
			}
		})();
	}

	setTripState(trip) {
		this.setState({ trip: trip });
	}

	render() {
		// console.log('connected');
		return (
			<BrowserRouter>
				<div id="root" style={{ height: "100%" }}>
					<Header trip={this.state.trip} />
					<Routesss trip={this.state.trip} setTripState={this.setTripState} />
				</div>
			</BrowserRouter>
		);
	}
}

ReactDom.render(<App />, document.getElementById("react-app"));
