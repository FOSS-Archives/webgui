import React, {Component} from 'react';
import {Button} from 'primereact/button';
import AccountRenderer from './accountRenderer';

class Account extends Component{
   constructor(props){
      super(props);
      this.state = {
         user: { ...props.user, ...{ dirty: false } }
      };
      this.updateField = this.updateField.bind(this);
   }

   updateField(fieldName, fieldValue){     
      // Mark the user as dirty so we can display conditonal buttons
      let userModified = false;
      Object.keys(this.state.user).forEach( key => {
         if (this.props.user[key] !== fieldValue){
            userModified = true;
         }
         
      });
      if (userModified){      
         let updatedUser = {...this.state.user, ...{[fieldName]: fieldValue, dirty: userModified} };
         this.setState({ user: updatedUser });
      }
   };   
   
   render(){
      let saveUserButton = this.state.user.dirty ?
         <Button label="Save" onClick={e => this.props.saveUser(this.state.user)} /> :
         '';        
      
      return (
         <div>
            <AccountRenderer user={this.state.user} updateField={this.updateField} />
            {saveUserButton}
         </div>
      );
   }
   
}

export default Account;
