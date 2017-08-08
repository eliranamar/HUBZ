import React from "react";
import { Link } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			trip: props.trip
		};
	}
	componentWillReceiveProps(nextProps) {
		// console.log(nextProps);
		this.setState({ trip: nextProps.trip });
	}

	render() {
		let currentTrip = (
			<li>
				<Link to="/trip">
					Current Trip ID: {this.state.trip.id}
				</Link>
			</li>
		);
		return (
			// took off inverse style navbar
			<nav className="navbar">
				<div className="container-fluid">
					<div className="navbar-header">
						<button
							type="button"
							className="navbar-toggle"
							data-toggle="collapse"
							data-target="#myNavbar"
						>
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</button>
						<Link className="navbar-brand" to="/">
							Hubz
						</Link>
					</div>
					<div className="collapse navbar-collapse" id="myNavbar">
						<ul className="nav navbar-nav">
							<li role="presentation">
								<Link to="/">Home</Link>
							</li>
							{/* dropdown + addition of CHECKIN */}
							<li className="dropdown">
								<a
									className="dropdown-toggle"
									data-toggle="dropdown"
									href="#">Trips
        <span className="caret"></span></a>
								<ul className="dropdown-menu">
									<li role="presentation">
										<Link to="/findtrip">Find Trip</Link>
									</li>
									<li role="presentation">
										<Link to="/trip">Create Trip</Link>
									</li>
									<li role="presentation">
										<Link to="/checkin">Checkin To Hub</Link>
									</li>
									
								</ul>
							</li>
							<li role="presentation">
								<Link to="/about">About</Link>
							</li>
							<li role="presentation">
								<Link to="/contact">Contact</Link>
							</li>

						</ul>
						{/* made the login with an icon and moved to the right  */}
						<ul className="nav navbar-nav navbar-right">
							<li >
								{/*//TODO chagne to LOGOUT after login.. of course and delete token   */}
								<a target="_self" href="/auth/facebook"> <span className="glyphicon glyphicon-log-in">   </span>
								| Login
								</a>
							</li>
							</ul>

					</div>
				</div>
			</nav>
		);
	}
}

export default App;
