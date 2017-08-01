import React from 'react';
import weatherApp from './weatherApp';
import Page404 from './weatherApp/common/404';
import About from './weatherApp/common/About';
import Deals from './weatherApp/common/Deals';
import Contact from './weatherApp/common/Contact';

import {Switch, Route, Redirect} from 'react-router-dom';

const Routesss = () => (
    <div className="container">
        <Switch>
            <Route name="home" exact path='/' component={weatherApp} />
            <Route name="about" exact path='/about' component={About} />
            <Route name="deals" exact path='/deals' component={Deals} />
            <Route name="contact" exact path='/contact' component={Contact} />
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routesss;