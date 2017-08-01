import React from 'react';
import Homepage from './Routesss';
import Page404 from './Routesss/common/404';
import About from './Routesss/common/About';
import Contact from './Routesss/common/Contact';

import {Switch, Route, Redirect} from 'react-router-dom';

const Routes = () => (
    <div className="container">
        <Switch>
            <Route name="home" exact path='/' component={Homepage} />
            <Route name="about" exact path='/about' component={About} />
            <Route name="contact" exact path='/contact' component={Contact} />
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routes;