import React from 'react';

import './Personal.css';
const Personal = user => {
   
   return (
      <div>
         <p>Personal Information</p>           
         <div className="p-grid">
            <div className="p-col-3 text-right font-weight-bold">Gender:</div>
            <div className="p-col-9">{user.gender}</div>
            <div className="p-col-3 text-right font-weight-bold">Pronoun:</div>
            <div className="p-col-9">{user.pronoun}</div>            
            <div className="p-col-3 text-right font-weight-bold">Birth Date:</div>
            <div className="p-col-9">{user.birthdate}</div>            
         </div>
      </div>
   );   
   
};

export default Personal;



