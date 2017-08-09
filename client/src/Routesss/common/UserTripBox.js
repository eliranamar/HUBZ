import React from "react";

class UserTripBox extends React.Component {
	constructor(props) {
		super(props);
	}

	theLocations(dataItem) {
		return dataItem.locations.map(function(item, id) {
			return (
				<h5 key={id}>
					{" "}{item.name}
				</h5>
			);
		});
	}

	render() {
		// console.log(this.props)
		const dataItem = this.props.item;
		return (
			<div
				style={{ padding: "10px" }}
				className="col-sm-6 col-md-4"
			>
				<div className="user-trip-box" style={{ height: "250px", overflow: "auto", marginTop: "10px" }}>
					<div>
						<h3>
							Trip Name: {dataItem.name}
						</h3>
						<hr />

						{this.theLocations(dataItem)}

						<button className="btn btn-square">Add location</button>
					</div>
				</div>
			</div>
		);
	}
}

export default UserTripBox;
