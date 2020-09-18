import React from 'react';

import './Contact.css';
export default user => {
   return (
      <div>
         <p>Contact Information</p>           
         <div className="p-grid">
            <div className="p-col-2 text-right font-weight-bold">Email:</div>
            <div className="p-col-10">{user.email}</div>
            <div className="p-col-2 text-right font-weight-bold">Cell:</div>
            <div className="p-col-10">{user.cell}</div>
            <div className="p-col-2 text-right font-weight-bold text-nowrap">Home Phone:</div>
            <div className="p-col-10">{user.homephone}</div> 
            <div className="p-col-2 text-right font-weight-bold text-nowrap">Work Phone:</div>
            <div className="p-col-10">{user.workphone}</div>                
         </div>
      </div>
   );   
   
};
