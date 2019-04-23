import React from 'react';

const Account = user => {
   return (
      <div className="p-grid">
         <div className="p-col-1 text-right font-weight-bold">Username:</div>
         <div className="p-col-11">{user.username}</div>
         <div className="p-col-1 text-right font-weight-bold">Date Created:</div>
         <div className="p-col-11">{user.created}</div>
         <div className="p-col-1 text-right font-weight-bold">Last Updated:</div>
         <div className="p-col-11">{user.lastlogin}</div>
      </div>
   );
};

export default Account;