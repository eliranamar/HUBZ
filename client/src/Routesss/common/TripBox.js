import React from "react";

class TripBox extends React.Component {
	constructor(props) {
		super(props);
		//bind this to functions
		// this.findThisTrip = this.findThisTrip.bind(this);
	}

	theLocations(dataItem) {
		return dataItem.locations.map(function(item, id) {
			return (
				<p key={id}>
					{" "}{item.name}
				</p>
			);
		});
	}
	render() {
		console.log(this.props);
		const dataItem = this.props.item;
		return (
			<div
				className="col-sm-6 col-md-4 float-left"
				style={{ height: "555px", overflow: "auto", marginTop: "10px" }}
			>
				<div className="thumbnail">
					<img
						src="http://res.cloudinary.com/drjrwr4ao/image/upload/v1502271313/bkgrd1-min_s4rjee.jpg"
						alt="..."
					/>
					<div className="caption">
						<h2 className="media-heading" style={{ color: "#ff5733" }}>
							{dataItem.name}
							{"  "}
						</h2>
						<h3>
							{dataItem.type} Trip
						</h3>
						{this.theLocations(dataItem)}
					</div>
				</div>
			</div>
		);
	}
}

export default TripBox;
