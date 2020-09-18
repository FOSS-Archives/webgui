import React, {Component} from 'react';
import {Button} from 'primereact/button';
import AccountRenderer from './accountRenderer';

class Account extends Component{
   constructor(props){
      super(props);
      this.state = {
         user: props.user
      };
      this.updateField = this.updateField.bind(this);
   }

   updateField(fieldName, fieldValue){
      let user = {...this.state.user, ...{[fieldName]: fieldValue}};
      this.setState({ user: user });
   };   
   
   render(){
      return (
         <div>
            <AccountRenderer user={this.state.user} updateField={this.updateField} />
            <Button label="Save" onClick={e => this.props.saveUser(this.state.user)} />
         </div>
      );
   }
   
}

export default Account;
