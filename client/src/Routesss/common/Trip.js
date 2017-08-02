import React from 'react';
import axios from "axios";
import Location from "./Location";
import { Route, Redirect } from "react-router-dom";

class Trip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trip: props.trip
    }
    // console.log(this.state.trip);

    this.getTripData = this.getTripData.bind(this);
  }

  getTripData(e) {
    e.preventDefault();
    let that = this;
    let data = {};
    data.name = document.getElementById("trip-name").value;
    data.type = document.querySelector('input[name = "trip-type"]:checked').value;
    console.log(data);
    axios.post("/trip", data)
      .then(function (response) {
        console.log('testttt');
        console.log(response.data);
        data.id = response.data.insertId;
        that.setState({ trip: data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (!this.state.trip) {
      // console.log(this.state.trip);
      // console.log(this.state.trip.id);
      history.pushState(null, null, '/trip/'+"3"+'/addlocation');
      return (
        <Location trip={this.state.trip}></Location>
      )
    }
    else {
      return (
        <div id="trip-box">
          <div className="center-block text-center">
            <form id="add-trip" action="" onSubmit={this.getTripData}>
              <h3>Add Your Trip!</h3>
              <h4>Enter You Trip Name:</h4>
              <fieldset>
                <input id="trip-name" placeholder="Your trip name" type="text" minLength="3" tabIndex="1" required autoFocus />
              </fieldset>
              <h5>
                Which Kind Of Traveler Are You?
            </h5>
              <label className="radio-inline"><input placeholder="Trip Name``" required type="radio" name="trip-type" value="Couple" />Couple</label>
              <label className="radio-inline"><input type="radio" name="trip-type" value="Friends" />Friends Group</label>
              <label className="radio-inline"><input type="radio" name="trip-type" value="Solo" />Solo Traveler</label>
              <br />
              <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
              </fieldset>
            </form>
          </div>
          <hr />
        </div>
      );
    }
  }
}

export default Trip;