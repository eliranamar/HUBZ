import React from "react";
import { Redirect } from "react-router-dom";

class Logout extends React.Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
		this.state = {};
		console.log("from logout.js");
	}
	//  Save the token and the name of connected user to local storage
	logout() {
		console.log("from logout()");
		localStorage.removeItem("user");
		this.props.setUserState({
			name: null,
      token: null,
      id: null
		});
	}

	componentWillMount() {
		this.logout();
	}
	render() {
		return <Redirect to="/" />;
	}
}

export default Logout;
