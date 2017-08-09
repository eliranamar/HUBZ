import React from "react";
import { Link } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		// console.log(props);
		this.state = {
			trip: props.trip,
			user: props.user
		};
	}
	componentWillReceiveProps(nextProps) {
		// console.log(nextProps);
		this.setState({ trip: nextProps.trip });
		this.setState({ user: nextProps.user });
	}

	render() {
		let showLogin = (
			<li>
				<a target="_self" href="/auth/facebook">
					{" "}<span className="glyphicon glyphicon-log-in"> </span>
					| Login
				</a>
			</li>
		);
		let showUser = (
			<li role="presentation">
				<Link to="/logout">
					Logout({this.state.user.name})
				</Link>
			</li>
		);
		return (
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
							HUBZ
						</Link>
					</div>
					<div className="collapse navbar-collapse" id="myNavbar">
						<ul className="nav navbar-nav">
							{/* <li role="presentation">
                                <Link to="/">Home</Link>
                            </li> */}
							{/* <li role="presentation">
                                <Link to="/findtrip">Find Trip</Link>
                            </li>
                            <li role="presentation">
                                <Link to="/trip">Create Trip</Link>
                            </li>
                            <li role="presentation">
                                <Link to="/usertrips">My Trips</Link>
                            </li> */}

							<li className="dropdown">
								<a className="dropdown-toggle" data-toggle="dropdown" href="#">
									Trips
									<span className="caret" />
								</a>
								<ul className="dropdown-menu">
									<li role="presentation">
										<Link to="/findtrip">Find Trip <i className="glyphicon glyphicon-search"></i></Link>
									</li>
									<li role="presentation">
										<Link to="/trip">Create Trip <i className="glyphicon glyphicon-plus"></i></Link>
									</li>
									<li role="presentation">
										<Link to="/usertrips">My Trips <i className="glyphicon glyphicon-user"></i></Link>
									</li>
								</ul>
							</li>

							<li role="presentation">
								<Link to="/about">About</Link>
							</li>
							<li role="presentation">
								<Link to="/contact">Contact</Link>
							</li>
							{/* if user is logged in show logout button */}
						</ul>

						<ul className="nav navbar-nav navbar-right">
							{this.state.user.name ? showUser : showLogin}
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default App;
