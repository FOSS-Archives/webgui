import React from 'react';
import {Panel} from 'primereact/panel';
import {Button} from 'primereact/button';
import {Message} from 'primereact/message';
import {Form, Field} from 'react-final-form';
import Messages from '../Errors';

import './LoginContainer.css';
export default ({user, onSubmit, onLogout}) => {
   
   // Redux form stuff
   let validate = ({username, password}) => {
      let errors = {};
      if (!username){
         errors.username = <Message severity="error" text="Login required!" />;
      }
      if (!password){
         errors.password = <Message severity="error" text="Password required!" />;
      }
      return errors;
   };
   
   let formFormat = ({ form, handleSubmit, submitting, pristine }) => {
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
                           <input {...input} placeholder="username" autoComplete="user-name" />
                           {meta.touched && meta.error && <span>{meta.error}</span>}
                         </div>
                       )}
                     />
                     
                     <Field name="password"
                       render={({ input, meta }) => (
                         <div>
                           <label className="p-col-fixed" style={{width:'100px'}}>Password:</label>
                           <input type="password" {...input} placeholder="password" autoComplete="current-password" />
                           {meta.touched && meta.error && <span>{meta.error}</span>}
                         </div>
                       )}
                     />                   
                     <div className="p-grid">
                        <div className="p-col"><button type="submit" disabled={submitting || pristine}>Submit</button></div>
                     </div>
                  </Panel>
               </div>
               <div className="p-col-4"></div>
            </div>
         </form>
      );
   };
   
   if ( user && user.authenticated ){
      return <Button label="Logout" icon="pi pi-power-off" className="p-button-danger allium-logout-button" onClick={onLogout} />;
      
   }else{
      return ( 
         <Form onSubmit={onSubmit} validate={validate} className="login-container" render={formProps => formFormat( formProps )} />
      );
      
   }   
};