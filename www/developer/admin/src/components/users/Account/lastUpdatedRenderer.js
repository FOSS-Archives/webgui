import React from 'react';

export default user => {
   return (
      <div className="p-grid allium-editable-field">          
         <div className="p-col-2 p-md-2 p-lg-2 font-weight-bold text-nowrap">Last Login:</div> 
         <div className="p-col-10 p-md-10 p-lg-4 alium-field-uneditable">{user.lastlogin}</div>
      </div>           
   );
};