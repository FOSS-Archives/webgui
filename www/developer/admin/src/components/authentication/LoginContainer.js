import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Panel} from 'primereact/panel';
import {Button} from 'primereact/button';
import {Message} from 'primereact/message';
import { login, logout } from '../../actions/authentication';
import { Form, Field } from 'react-final-form';
import Messages from '../Errors';

import './LoginContainer.css';
class LoginContainer extends Component {
   onLogout = event => {
      event.preventDefault();
      this.props.logout();

   }
   
   onSubmit = async values => {
      this.props.login(values.username, values.password);
      
   };
   
   formFormat = ({ form, handleSubmit }) => {
      return ( 
         <form onSubmit={handleSubmit}>
            <div className="p-grid">
               <div className="p-col-2"></div>            
               <div className="p-col-8"><Messages /></div>
               <div className="p-col-2"></div>               
            
               <div className="p-col-4"></div>
               <div className="p-col-4">
                  <Panel header="Admin Login">                  
                     <Field name="username"
                       render={({ input, meta }) => (
                         <div>
                           <label className="p-col-fixed" style={{width:'100px'}}>Username:</label>
                           <input {...input} placeholder="username" />
                           {meta.touched && meta.error && <span>{meta.error}</span>}
                         </div>
                       )}
                     />
                     
                     <Field name="password"
                       render={({ input, meta }) => (
                         <div>
                           <label className="p-col-fixed" style={{width:'100px'}}>Password:</label>
                           <input type="password" {...input} placeholder="password" />
                           {meta.touched && meta.error && <span>{meta.error}</span>}
                         </div>
                       )}
                     />                   
                     <div className="p-grid">
                        <div className="p-col"><button type="submit">Submit</button></div>
                     </div>
                  </Panel>
               </div>
               <div className="p-col-4"></div>
            </div>
         </form>
      );
   };
   
   render(){
      if ( this.props.user && this.props.user.authenticated ){
         return <Button label="Logout" icon="pi pi-power-off" className="p-button-danger allium-logout-button" onClick={this.onLogout} />;
      }
      
      return ( 
         <Form onSubmit={this.onSubmit.bind(this)} validate={validate} className="login-container" 
               render={formProps => this.formFormat( formProps )} />
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

//const formWrapped = reduxForm({ form: "loginForm", validate })(LoginContainer);

// Usual Redux flow
const mapStateToProps = state => {
   return {
      user: state.user
   };
};

export default connect(mapStateToProps, {login, logout})(LoginContainer);