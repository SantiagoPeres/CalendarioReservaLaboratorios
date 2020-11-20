import React from 'react';
import { Switch } from 'react-router-dom';

import Logon from '../pages/Logon';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Logon} />
      <Route path="/home" pageName="Home" component={Home} />
      <Route path="/profile" pageName="Profile" component={Profile} />
    </Switch>
  );
}
