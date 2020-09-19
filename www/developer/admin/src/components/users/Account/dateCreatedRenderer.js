import React from 'react';

export default user => {
   return (
      <div className="p-grid allium-editable-field">          
         <div className="p-col-1 p-md-6 p-lg-3 font-weight-bold text-right">Created:</div> 
         <div className="p-col-11 p-md-6 p-lg-3 alium-field-uneditable">{user.created}</div>
      </div>
   );
};