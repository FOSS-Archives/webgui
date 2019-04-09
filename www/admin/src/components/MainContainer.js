import React from 'react';
import {connect} from 'react-redux';
import BlankPanel from './panels/Blank';
import Login from './authentication/LoginContainer';
import NavigationTop from './navigation/NavigationTopContainer';
import BreadCrumbs from './navigation/BreadCrumbs';
//import Location from './Location';

import './MainContainer.css';
const mainContainer = props => {
   if (!props.user.authenticated) {
      return <Login />;

   } else {
      return (
          <div>
             <NavigationTop user={props.user} />
             <BreadCrumbs />
             <BlankPanel />
          </div>
       );

   }
};

const mapStateToProps = state => {
   return {
      user: state.user
   };
};

export default connect(mapStateToProps)(mainContainer);