import React from "react";
import { Redirect } from "react-router-dom";

class Authentication extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.connected = this.connected.bind(this);
		this.state = {
			name: this.props.match.params.name,
			token: this.props.match.params.token,
			id: this.props.match.params.id
		};
		console.log('from authenticaton.js');
		console.log(this.state);
	}
	//  Save the token and the name of connected user to local storage
	connected() {
		console.log('from connected()');
		// console.log(this.props);
		let user = this.state;
		this.props.setUserState(user);
		localStorage.setItem("user", JSON.stringify(user));
	}

	componentWillMount() {
		this.connected();
	}
	render() {
		return <Redirect to="/" />;
	} 
}

export default Authentication;
