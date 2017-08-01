import React from 'react';
import axios from "axios";
import { Route, Redirect } from "react-router-dom";

class Trip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trip: props.trip
    }

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

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="center-block">
          <form id="add-trip" action="" onSubmit={this.getTripData}>
            <h3>Add Your Trip!</h3>
            <h4>request for custom quote</h4>
            <fieldset>
              <input id="trip-name" placeholder="Your trip name" type="text" tabIndex="1" required autoFocus />
            </fieldset>
            <label className="radio-inline"><input required type="radio" name="trip-type" value="Couple" />Couple</label>
            <label className="radio-inline"><input type="radio" name="trip-type" value="Friends" />Friends Group</label>
            <label className="radio-inline"><input type="radio" name="trip-type" value="Solo" />Solo Traveler</label>
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

export default Trip;