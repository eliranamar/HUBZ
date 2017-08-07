import React from "react";
import { Redirect } from "react-router-dom";

class Authentication extends React.Component {
	constructor(props) {
		super(props);
		this.connected = this.connected.bind(this);
		this.state = {
			name: this.props.match.params.name,
			token: this.props.match.params.token
		};
		console.log('from authenticaton.js');
		console.log(this.state);
	}
	//  Save the token and the name of connected user to local storage
	connected() {
		console.log('from connected()');
		console.log(this.props);
		let User = this.state;
		localStorage.setItem("user", JSON.stringify(User));
	}

	componentWillMount() {
		this.connected();
	}
	render() {
		return <Redirect to="/" />;
	} 
}

export default Authentication;
