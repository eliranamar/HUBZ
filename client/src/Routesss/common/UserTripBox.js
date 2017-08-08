import React from 'react';

class UserTripBox extends React.Component { 
  constructor(props) {
        super(props);
    }  
    
  theLocations(dataItem) {
      return dataItem.locations.map(function(item, id) {
        return <div key={id}> {item.name}</div>
      });
  }

  render() {
    // console.log(this.props)
    const dataItem = this.props.item;
    return (
        <div className="col-md-4 col-lg-4 col-xl-4">
            <h3 className="media-heading">Trip Name: {dataItem.name}</h3>
              <h4 className="media-heading">{this.theLocations(dataItem)}</h4>
        </div>
    )
  }
}

export default UserTripBox;