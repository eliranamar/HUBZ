import React from "react";
import TripBox from "./TripBox";

class ViewLocations extends React.Component {
  listTrips() {
    if (this.props.trips.length > 0) {
      return this.props.trips.map(function(item, id) {
        return <TripBox key={id} item={item} />;
      });
    } else return <p>Select your location</p>;
  }

  totalTrips() {
    if (this.props.trips.length > 0) {
      return (
        <h4 style={{ textAlign: "center" }}>
          Found{" "}
          <span style={{ color: "red" }}> {this.props.trips.length} </span>{" "}
          Trips that include {this.props.currentHub.hub}
        </h4>
      );
    } else return <p />;
  }

  render() {
    return (
      <div className="conatiner">
        <div className="row">
          <hr />
          {this.totalTrips()}
          <h2 style={{ textAlign: "center" }}>
            Hubz and Routes by Other Travellers
          </h2>
          {this.listTrips()}
        </div>
      </div>
    );
  }
}

export default ViewLocations;