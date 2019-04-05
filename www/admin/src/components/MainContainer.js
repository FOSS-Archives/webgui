import React, {Component} from 'react';
import {connect} from 'react-redux';
import BlankPanel from './panels/Blank';
import Login from './LoginContainer';
import NavigationTop from './navigation/NavigationTopContainer';
import BreadCrumbs from './navigation/BreadCrumbs';
//import Location from './Location';

const mainContainer = props => {
   if (!props.authenticated) {
      return (
          <div  style={{paddingTop: '40px'}}>
             <Login />
          </div>
       );

   } else {
      return (
          <div>
             <NavigationTop authenticated={props.authenticated} />
             <BreadCrumbs />
             <BlankPanel />
          </div>
       );

   }
};

const mapStateToProps = state => {
   return {
      authenticated: state.authenticated
   };
};

export default connect(mapStateToProps)(mainContainer);