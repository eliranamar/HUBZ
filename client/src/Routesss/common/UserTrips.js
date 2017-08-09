import React from "react";
import axios from "axios";
import UserTripBox from "./UserTripBox";
import { Link } from "react-router-dom";

class UserTrips extends React.Component {
	constructor(props) {
		super(props);
		// console.log(props.user);
		this.state = {
			userTrips: []
		};
		this.findUserTrips = this.findUserTrips.bind(this);
  }

  listTrips() {
   if (this.state.userTrips.length > 0) {
     return this.state.userTrips.map(function(item, id) {
       return <UserTripBox key={id} item={item}/>
     });
   }
   else return <h2>You Dont Have Any Trips Yet :(</h2>
 }
  
	componentDidMount() {
    // console.log(this.props.user);
    this.findUserTrips();
  }

	findUserTrips() {
		let that = this;
		axios
			.get("/trip/usertrips/" + this.props.user.id)
			.then(function(response) {
				// console.log('testttt');
				// console.log(response.data);
				that.setState({ userTrips: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	render() {
    // let tripsList = 
		return (
			<div className="container text-center">
				<h2>My Trips</h2>
				<hr/>
        <div className="row">
           {this.listTrips()}
        </div>
			</div>
		);
	}
}

export default UserTrips;
