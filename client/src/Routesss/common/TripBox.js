// import React from 'react';

// class TripBox extends React.Component { 
//   constructor(props) {
//         super(props);
//         //bind this to functions
//         this.findThisTrip = this.findThisTrip.bind(this);
//     }
//    findThisTrip(){
//         this.props.findThisTrip(this.props.item);//Using a function to call function in props
//     }

    
//   render() {
//     const dataItem = this.props.item;
//     console.log(dataItem)
//  const thisMedia = dataItem.map((item, index) => 
//     return (
//        <div className="equalHMV eq">
//         <div className="media">
//           <div className="media-body">
//             <h4 className="media-heading">{dataItem.country}</h4>
//             <p>{dataItem.name} - {dataItem.trip_id}</p>
//             <p>{dataItem.lng} - {dataItem.lat}</p>
//           </div>
//         </div>
//         <hr/>
//       </div>
//     )
//   }
// }

// export default TripBox;
