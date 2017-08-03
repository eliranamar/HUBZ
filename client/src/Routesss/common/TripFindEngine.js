import React from 'react';
import TripBox from  './Routesss/common/TripBox';


const TripFindEngine = (props) => {
  const boxes = props
    .cards
    .map((item, index) => <TripBox
      key={index}
      findThisTrip={props.findThisTrip}
      item={item}/>)
  return (
    <div className="equalHeightWrap flexWrap">
      {boxes}
    </div>
  );
};

export default TripFindEngine;