import React from 'react';
import { Route } from 'react-router-dom';
import Intro from './Intro';
import Users from './users/List';
import User from './users/User';

import './BottomPanel.css';
export default () => {
   return (
      <div className="bottom-panel-component">
         <Route path="/" exact component={Intro} />
         <Route path="/users" component={Users} />
         <Route path="/user/:id" component={User} />
      </div>
   );
}