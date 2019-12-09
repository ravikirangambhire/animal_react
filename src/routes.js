import React from 'react';
import { Route, Switch } from 'react-router-dom';
 import HomePage from './HomePage';
/*import { DashboardContent } from './components/Dashboard/DashboardContent';
import Favors from './components/Favors/Favors';
import { Users } from './components/Users/Users';
import RatingsAndReviews from './components/Ratings/RatingsAndReviews';
import { Login } from './components/Login/Login';
*/

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
   
  </Switch>
);
