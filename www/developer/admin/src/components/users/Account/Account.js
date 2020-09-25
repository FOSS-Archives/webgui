import React, {Component} from 'react';
import isEqual from 'react-fast-compare';
import {Button} from 'primereact/button';
import AccountRenderer from './accountRenderer';

class Account extends Component{
   constructor(props){
      super(props);
      this.state = {
         user: props.user,
         dirty: false
      };
      this.updateField = this.updateField.bind(this);
   }

   updateField(fieldName, fieldValue){
      let modifiedUser = { ...this.state.user, ...{[fieldName]: fieldValue} };
      let modified = !isEqual(this.props.user, modifiedUser);
      this.setState({ dirty: modified, user: modifiedUser });      
   };
   
   updateAppSessionUser(){
      this.props.saveUser(this.state.user);
      this.props.updateUser(this.state.user);
      this.setState({ dirty: false });            
   };
   
   render(){
      return (
         <div>
            <AccountRenderer user={this.state.user} updateField={this.updateField} />
            {this.state.dirty && <Button label="Save" onClick={e => this.updateAppSessionUser()} />}
         </div>
      );
   }
   
}

export default Account;
