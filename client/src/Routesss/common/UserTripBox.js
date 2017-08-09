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
			<div style={{ padding: "10px" }} className="col-sm-6 col-md-4">
				<div
					className="user-trip-box"
					style={{ height: "250px", overflow: "auto", marginTop: "10px" }}
				>
					<div>
						<h3>
							{dataItem.name}
						</h3>
						<hr />

						{this.theLocations(dataItem)}

						<button className="btn btn-success btn-square">Add location</button>
						<button className="btn btn-primary btn-square">
							<i className="fa fa-facebook-square" aria-hidden="true" /> Share
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default UserTripBox;
