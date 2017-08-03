import React from 'react';
import TripBox from './TripBox';
import { Route, Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';

const TripFindEngine = (props) => {

  let found = false;
  let boxes = [];
  if (props.trips.hasOwnProperty(31)) {
    boxes = props.trips[31]
      .map((item, index) => <TripBox
        key={index}
        findThisTrip={props.findThisTrip}
        item={item} />)
    console.log(boxes);
    found = true;
  }
  if (found) {
    return (
      <div className="equalHeightWrap flexWrap text-center container">
        <button onClick={props.redirectToMap} className="btn btn-primary btn-square"><Link to="/findlocation">Show Trip</Link></button>
        <hr/>
        <h2>Trip Locations</h2>
        {boxes}
      </div>
    );

  } else {
    return (
      <div>
      </div>
    )
  }
};

export default TripFindEngine;