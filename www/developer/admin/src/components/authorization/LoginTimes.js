import React from 'react';
import {connect} from 'react-redux';
import LoginTimesRenderer from './loginTimesRenderer';

const LoginTimes = ({ logins }) => {
   return <LoginTimesRenderer logins={logins} />; 
};

const mapStateToProps = state => {
   return {
      logins: state.logins
   };
};

export default connect(mapStateToProps)(LoginTimes);