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
				id: null,
				user_id: null
			},
			user: {
				name: null,
				token: null,
				id: null
			},
			userProfilePic : {
				url : null
			}
		};
		// console.log(this.state.user);
		this.setTripState = this.setTripState.bind(this);
		this.setUserState = this.setUserState.bind(this);
	}
	componentWillMount() {
		let that = this;
		(function() {
			let user = JSON.parse(localStorage.getItem("user"));
			if (user) {
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
	setUserState(user) {
		this.setState({ user: user });
	}

	render() {
		// console.log('connected');
		return (
			<BrowserRouter>
				<div id="root" style={{ height: "100%" }}>
					<Header user={this.state.user} trip={this.state.trip} />
					<Routesss user={this.state.user} trip={this.state.trip} setUserState={this.setUserState} setTripState={this.setTripState} />
				</div>
			</BrowserRouter>
		);
	}
}

ReactDom.render(<App />, document.getElementById("react-app"));
