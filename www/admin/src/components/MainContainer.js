import React from 'react';
import {connect} from 'react-redux';
import BlankPanel from './panels/Blank';
import Login from './LoginContainer';
import NavigationTop from './navigation/NavigationTopContainer';
import BreadCrumbs from './navigation/BreadCrumbs';
//import Location from './Location';

const mainContainer = props => {
   if (!props.user.authenticated) {
      return (
          <div  style={{paddingTop: '40px'}}>
             <Login />
          </div>
       );

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