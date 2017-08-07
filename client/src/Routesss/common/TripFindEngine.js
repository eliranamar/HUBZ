import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import FindLocation from "./FindLocation";

class TripFindEngine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			paths: props.trips,
			currentHub: {}
		};
	}

	componentWillReceiveProps(nextProps) {
		// console.log(nextProps);
		this.setState({ paths: nextProps.trips, currentHub: nextProps.currentHub });
	}
	render() {
		return (
			<div style={{ height: "100%" }}>
				<FindLocation
					paths={this.props.trips}
					currentHub={this.state.currentHub}
				/>
			</div>
		);
	}
}

export default TripFindEngine;
