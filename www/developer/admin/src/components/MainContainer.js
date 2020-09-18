import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';
import BottomPane from './BottomPaneComponent';
import Login from './authentication/LoginContainer';
import NavigationTop from './navigation/NavigationTopContainer';
import Messages from './Errors';

import './MainContainer.css';
const mainContainer = props => {
   if (!props.user || !props.user.authenticated) {
      return <Login />;

   } else {
      return (
          <Router>
             <NavigationTop loginContainer={<Login user={props.user} />} />
             <Messages />
             <BottomPane />              
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