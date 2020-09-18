import React, {Component} from 'react';
import {connect} from 'react-redux';
import { saveUser, updateUser } from '../../actions/users';
import UserRenderer from './userRenderer';

import './User.css';
class User extends Component {
   constructor(props){
      super(props);
      this.saveUser = this.saveUser.bind(this);
      this.updateUser = this.updateUser.bind(this);
   }
   
   componentDidMount(){
      if (!this.props.users){
         this.props.history.push('/');
         
      }else{
         this.props.users.forEach( user => {
            if ( user.id === this.props.match.params.id ){
               this.updateUser(user);
            } 
         });
      }
      
   }
   
   saveUser(user){
      this.props.saveUser(this.props.users, user);
   }
   
   updateUser(user){
      this.props.updateUser(user);  
   }
   
   render(){
      return <UserRenderer history={this.props.history} user={this.props.user} groups={this.props.groups} updateUser={this.updateUser} saveUser={this.saveUser} />;
   }
};

const mapStateToProps = state => {
   return {
      groups: state.groups,
      users: state.users,
      user: state.user
   };   
};

export default connect(mapStateToProps, {saveUser, updateUser})(User);
