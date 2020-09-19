import React from 'react';

export default user => {
   return (
      <div className="p-grid allium-editable-field">          
         <div className="p-col-1 p-md-1 p-lg-1 font-weight-bold text-right text-nowrap">Last Login:</div> 
         <div className="p-col-11 p-md-11 p-lg-5 alium-field-uneditable">{user.lastlogin}</div>
      </div>           
   );
};