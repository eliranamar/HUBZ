import React from 'react';
import axios from "axios";
import { Route, Redirect } from "react-router-dom";

class Location extends React.Component {
  constructor(props) {
    super(props);
    // let trip = this.props.trip;
    this.state = {
      trip: {
        name: "amit",
        id: 3,
        type: 'Solo'
      }
    }
    // let trip = {};
    // trip.name = "amit";
    // trip.id = 3;
    // trip.type = 'Solo';
    console.log(this.state.trip);
    this.addLocation = this.addLocation.bind(this);
  }

  addLocation(e) {
    e.preventDefault();
    // console.log('testLOC');
    let location = {};
    location.trip_id = this.state.trip.id;
    location.name = document.getElementById("location-name").value;
    axios.post("/trip/" + location.trip_id + "/addlocation", location)
      .then(function (response) {
        console.log('server responded');
        console.log(response.data);
        // data.id = response.data.insertId;
        // that.setState({ trip: data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div id="location-box">
        <div className="center-block text-center">
          <form id="add-location" action="" onSubmit={this.addLocation}>
            <h3>Add Your Location!</h3>
            <fieldset>
              <input id="location-name" placeholder="Your trip name" type="text" tabIndex="1" required autoFocus />
            </fieldset>
            {/* <label className="radio-inline"><input required type="radio" name="trip-type" value="Couple" />Couple</label>
            <label className="radio-inline"><input type="radio" name="trip-type" value="Friends" />Friends Group</label>
            <label className="radio-inline"><input type="radio" name="trip-type" value="Solo" />Solo Traveler</label> */}
            <br />
            <fieldset>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Location;