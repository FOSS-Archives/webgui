import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {login, logout} from '../../actions/authentication';
import LoginRenderer from './loginRenderer';

import './LoginContainer.css';
class LoginContainer extends Component {
   onLogout = event => {
      event.preventDefault();
      this.props.logout();

   }
   
   onLogin = async values => {
      this.props.login(values.username, values.password);
      this.props.history.push("/");
   }
   
   render(){
      return ( 
         <LoginRenderer user={this.props.user} onSubmit={this.onLogin.bind(this)} onLogout={this.onLogout.bind(this)} />
      );
      
   }   
};

const mapStateToProps = state => {
   return {
      user: state.loggedInUser
   };
};

export default connect(mapStateToProps, {login, logout})(withRouter(LoginContainer));