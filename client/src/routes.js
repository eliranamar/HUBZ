import React from 'react';
import Homepage from './Routesss';
import Page404 from './Routesss/common/404';
import About from './Routesss/common/About';
import Logout from './Routesss/common/Logout';
import Contact from './Routesss/common/Contact';
import Trip from './Routesss/common/Trip';
import Location from './Routesss/common/Location';
import FindLocation from './Routesss/common/FindLocation';
import FindTrip from './Routesss/common/FindTrip';
import UserTrips from './Routesss/common/UserTrips';
import Authentication from './Routesss/common/Authentication';

import {Switch, Route, Redirect} from 'react-router-dom';

const Routes = (props) => (
    <div className="container-fluid full-height">
        <Switch>
          <Route name="home" exact path='/' component={Homepage} />
           <Route name="about" exact path='/about' component={About} />
           <Route name="logout" exact path='/logout' render={() => <Logout setUserState={props.setUserState} />} />
           <Route name="contact" exact path='/contact' component={Contact} />
           <Route name="findlocation" exact path='/findlocation' component={FindLocation} />
           <Route name="findtrip" exact path='/findtrip' render={() => <FindTrip setTripState={props.setTripState} />} />
           <Route name="usertrips" exact path='/usertrips' render={() => <UserTrips user={props.user} />} />
           <Route name="trip" exact path='/trip' render={() => <Trip user={props.user} trip={props.trip} setTripState={props.setTripState} />} />
           <Route name="authentication"  path='/authorization/:token/:name/:id'  render={(prop) => <Authentication {...prop} setUserState={props.setUserState} />} /> 
           <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routes;