import React from 'react';

const Account = user => {
   return (
      <div className="p-grid">
         <div className="p-col-1 text-right font-weight-bold">Username:</div>
         <div className="p-col-11">{user.username}</div> 
         <div className="p-col-1 text-right font-weight-bold">Alias:</div>
         <div className="p-col-11">{user.alias}</div>
         <div className="p-col-1 text-right font-weight-bold">Date Created:</div>
         <div className="p-col-11">{user.created}</div>
         <div className="p-col-1 text-right font-weight-bold">Last Updated:</div>
         <div className="p-col-11">{user.lastlogin}</div>
         <div className="p-col-1 text-right font-weight-bold">First Name:</div>
         <div className="p-col-11">{user.firstname}</div>
         <div className="p-col-1 text-right font-weight-bold">Middle Name:</div>
         <div className="p-col-11">{user.middlename}</div>           
         <div className="p-col-1 text-right font-weight-bold">Last Name:</div>
         <div className="p-col-11">{user.lastname}</div> 
         <div className="p-col-1 text-right font-weight-bold">Signature:</div>
         <div className="p-col-11">{user.signature}</div>
         <div className="p-col-1 text-right font-weight-bold">Photo:</div>
         <div className="p-col-11">{user.photo}</div>
         <div className="p-col-1 text-right font-weight-bold">Avatar:</div>
         <div className="p-col-11">{user.avatar}</div>             
      </div>
   );
};

export default Account;