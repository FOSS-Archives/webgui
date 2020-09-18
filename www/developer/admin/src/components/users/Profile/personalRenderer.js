import React from 'react';

import './Personal.css';
export default user => {
   
   return (         
      <div className="p-grid">
         <div className="p-col-2 text-right font-weight-bold">Gender:</div>
         <div className="p-col-10">{user.gender}</div>
         <div className="p-col-2 text-right font-weight-bold">Pronoun:</div>
         <div className="p-col-10">{user.pronoun}</div>            
         <div className="p-col-2 text-right font-weight-bold">Birth Date:</div>
         <div className="p-col-10">{user.birthdate}</div>            
      </div>
   );   
   
};
