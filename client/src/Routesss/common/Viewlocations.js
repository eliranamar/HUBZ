import React from "react";
import TripBox from "./TripBox";

class ViewLocations extends React.Component {
  listTrips() {
    if (this.props.trips.length > 0) {
      return this.props.trips.map(function(item, id) {
        return <TripBox key={id} item={item} />;
      });
    } else return <p>Select something</p>;
  }

  render() {
    return (
      <div className="row">
        <hr />
        <h2>Hubz and Routes by Other Travellers</h2>
        {this.listTrips()}
      </div>
    );
  }
}

export default ViewLocations;