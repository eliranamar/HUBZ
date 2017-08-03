import React from 'react';

class TripBox extends React.Component { 
  constructor(props) {
        super(props);
        //bind this to functions
        this.findThisTrip = this.findThisTrip.bind(this);
    }
   deleteBoxFnc(){
        console.log(this.props.findThisTrip(this.props.item));//Using a function to call function in props
    }
  render() {
    const dataItem = this.props.item;
    return (
       <div className="equalHMV eq">
        <div className="media">
          <span className="glyphicon glyphicon-trash pull-right" onClick={this.findThisTrip} ></span>
          <div className="media-body">
            <h4 className="media-heading">{dataItem.country}</h4>
            <p>{dataItem.name} - {dataItem.trip_id}</p>
            <p>{dataItem.lng} - {dataItem.lat}</p>
          </div>
        </div>
        <hr/>
      </div>
    )
  }
}

export default TripBox;

