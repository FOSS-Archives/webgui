import React from 'react';
import { Route } from 'react-router-dom';
import Intro from './Intro';
import Users from './users/List';

export default () => {
   return (
      <div>
         <Route path="/" exact component={Intro} />
         <Route path="/users" component={Users} />
      </div>
   );
}