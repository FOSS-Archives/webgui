import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel} from 'primereact/panel';
import {Button} from 'primereact/button';
import {Message} from 'primereact/message';
import { login, logout } from '../../actions/authentication';
import { Field, reduxForm } from 'redux-form';
import Errors from '../Errors';

import './LoginContainer.css';
class LoginContainer extends Component {
   onLogin = ({username, password}) => this.props.login(username, password);
   onLogout = event => {
      event.preventDefault();
      this.props.logout();

}
   
   renderInput = ({input, label, type, meta}) => {
      return (
          <div className="p-grid">
             <div className="p-col-3">
                <div className="box"><label>{label}</label></div>
             </div>
             <div className="p-col-6">
                <div className="box"><input {...input} type={type} className="p-error" autoComplete="off" /></div>
             </div>
             <div className="p-col-3">
                <div className="box">{meta.touched ? meta.error : ''}</div>
             </div>
          </div>
      );
   }
   
   render(){
      let submitable = "disabled";
      if ( this.props.user && this.props.user.authenticated ){
         return <Button label="Logout" icon="pi pi-power-off" className="p-button-danger allium-logout-button" onClick={this.onLogout} />;
      }else{
         // Make sure the user can login
         let { username, password } = ( this.props.loginForm && this.props.loginForm.values ) ? this.props.loginForm.values : {};
         if ( (username && username.trim().length > 0) && (password && password.trim().length > 0) ){
            submitable = "";
         }
      }
      return ( 
         <form onSubmit={this.props.handleSubmit(this.onLogin)} className="login-container">
            <div className="p-grid">
               <div className="p-col-4"></div>
               <div className="p-col-4">
                   <Panel header="Admin Login">
                      <Field name="username" component={this.renderInput} label="Username:" type="text" />
                      <Field name="password" component={this.renderInput} label="Password:" type="password" />
                      <div className="p-grid">
                         <div className="p-col"><button type="submit" disabled={submitable}>Submit</button></div>
                      </div>
                   </Panel>
               </div>
               <div className="p-col-4"></div>
            </div>
         </form>
      );
      
   }   
};

// Redux form stuff
const validate = ({username, password}) => {
   let errors = {};
   if (!username){
      errors.username = <Message severity="error" text="Login required!" />;
   }
   if (!password){
      errors.password = <Message severity="error" text="Password required!" />;
   }
   return errors;
};

const formWrapped = reduxForm({ form: "loginForm", validate })(LoginContainer);

// Usual Redux flow
const mapStateToProps = state => {
   return {
      user: state.user,
      loginForm: state.form.loginForm
   };
};

export default connect(mapStateToProps, {login, logout})(formWrapped);