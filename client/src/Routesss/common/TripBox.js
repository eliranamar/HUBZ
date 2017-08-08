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
        <div key={id}>
          {" "}{item.name}
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    const dataItem = this.props.item;
    return (
      <div className="col-md-4">
        <div style={{padding:"5px"}}>
          <h3 className="media-heading" style={{ color: "#ff5733" }}>
            {dataItem.name}
          </h3>
          <h4 className="media-heading">
            {this.theLocations(dataItem)}
          </h4>
        </div>
      </div>
    );
  }
}

export default TripBox;