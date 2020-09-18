import React from 'react';

import './Work.css';
export default user => {
   return (        
      <div className="p-grid">
         <div className="p-col-2 text-right font-weight-bold">Name (Company Name):</div>
         <div className="p-col-10">{user.companyname}</div>
         <div className="p-col-2 text-right font-weight-bold">Department:</div>
         <div className="p-col-10">{user.workdepartment}</div>
         <div className="p-col-2 text-right font-weight-bold">Website:</div>
         <div className="p-col-10">{user.workwebsite}</div>
         <div className="p-col-2 text-right font-weight-bold">Address:</div>
         <div className="p-col-10">{user.workaddress}</div>
         <div className="p-col-2 text-right font-weight-bold">City:</div>
         <div className="p-col-10">{user.workcity}</div>
         <div className="p-col-2 text-right font-weight-bold">State:</div>
         <div className="p-col-10">{user.workstate}</div>
         <div className="p-col-2 text-right font-weight-bold">Zip Code:</div>
         <div className="p-col-10">{user.workzip}</div>
         <div className="p-col-2 text-right font-weight-bold">Country:</div>
         <div className="p-col-10">{user.workcountry}</div>
         <div className="p-col-2 text-right font-weight-bold">Timezone:</div>
         <div className="p-col-10">{user.worktimezone}</div>                    
      </div>
   );   
   
};

