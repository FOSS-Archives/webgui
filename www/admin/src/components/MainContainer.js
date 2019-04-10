import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import BottomPane from './BottomPaneComponent';
import Login from './authentication/LoginContainer';
import NavigationTop from './navigation/NavigationTopContainer';

import './MainContainer.css';
const mainContainer = props => {
   if (!props.user.authenticated) {
      return <Login />;

   } else {
      return (
          <div>
             <BrowserRouter>
                <NavigationTop user={props.user} />
                <BottomPane />              
             </BrowserRouter>
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