import React from 'react';
import {connect} from 'react-redux';

const Account = props => {
   if (!props.users){
      props.history.push('/');
   }
   
   let user = props.users.find( user => {
      if ( user.id === props.match.params.id ){
         return user;
      }
      return null;
   });
   
   if (user){
      return (
         <div className="p-grid">
            <div className="p-col-1 text-right font-weight-bold">ID:</div>
            <div className="p-col-11">{user.id}</div>
            <div className="p-col-1 text-right font-weight-bold">Username:</div>
            <div className="p-col-11">{user.username}</div>
            <div className="p-col-1 text-right font-weight-bold">Date Created:</div>
            <div className="p-col-11">{user.created}</div>
            <div className="p-col-1 text-right font-weight-bold">Last Updated:</div>
            <div className="p-col-11">{user.lastlogin}</div>
         </div>
      );
      
   }else{
      props.history.push('/');
      
   }
};

const mapStateToProps = state => {
   return {
      users: state.users
   };   
};

export default connect(mapStateToProps)(Account);