import React from 'react';

export default user => {
   return (
      <div className="p-grid">          
         <div className="p-col-1 text-right font-weight-bold">Last Login:</div>         
         <label className="p-col-11">{user.lastlogin}</label>
      </div>
   );
};