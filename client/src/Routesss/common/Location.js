import React from 'react';
import axios from "axios";
import { Route, Redirect } from "react-router-dom";

class Location extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className="center-block">
          <form id="add-location" action="" onSubmit={}>
            <h3>Add Your Location!</h3>
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

export default Location;