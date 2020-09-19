import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';
import BottomPanel from './bottomPanelRenderer';
import Login from './authentication/LoginContainer';
import NavigationTop from './navigation/NavigationTopContainer';
import Messages from './Errors';

import './MainContainer.css';
const mainContainer = props => {
   if (!props.user || !props.user.authenticated) {
      return (
         <Router>
           <Login />
         </Router>
      );

   } else {
      return (
         <Router>           
            <NavigationTop loginContainer={<Login user={props.user} />} />
            <Messages />
            <BottomPanel />              
         </Router>
      );

   }
};

const mapStateToProps = state => {
   return {
      user: state.loggedInUser
   };
};

export default connect(mapStateToProps)(mainContainer);