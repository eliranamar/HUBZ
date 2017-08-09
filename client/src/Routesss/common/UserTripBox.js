import React from "react";

class UserTripBox extends React.Component {
	constructor(props) {
		super(props);
	}

	theLocations(dataItem) {
		return dataItem.locations.map(function(item, id) {
			return (
				<div key={id}>
					{" "}{item.name}
				</div>
			);
		});
	}

	render() {
		// console.log(this.props)
		const dataItem = this.props.item;
		return (
			<div className="col-sm-5 col-md-4 user-trip-box">
				<h4 className="media-heading">
					Trip Name: {dataItem.name}
				</h4>
				<hr />
				<h5 className="media-heading">
					{this.theLocations(dataItem)}
				</h5>
        <button className="btn btn-square">Add location</button>
			</div>
		);
	}
}

export default UserTripBox;
