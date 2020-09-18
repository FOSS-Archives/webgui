import React from 'react';

import './Home.css';
export default user => {
   return (
      <div>
         <p>Home Information</p>
         <div className="p-grid">
            <div className="p-col-2 text-right font-weight-bold">Address:</div>
            <div className="p-col-10">{user.homeaddress}</div>
            <div className="p-col-2 text-right font-weight-bold">City:</div>
            <div className="p-col-10">{user.homecity}</div>
            <div className="p-col-2 text-right font-weight-bold">State:</div>
            <div className="p-col-10">{user.homestate}</div>
            <div className="p-col-2 text-right font-weight-bold">Zip Code:</div>
            <div className="p-col-10">{user.homezip}</div>
            <div className="p-col-2 text-right font-weight-bold">Country:</div>
            <div className="p-col-10">{user.homecountry}</div>
            <div className="p-col-2 text-right font-weight-bold">Timezone:</div>
            <div className="p-col-10">{user.hometimezone}</div>                    
         </div>
      </div>
   );   
   
};
