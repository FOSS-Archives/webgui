import React from 'react';

import './Contact.css';
export default ({user}) => {
   return (
      <div className="p-grid">
         <div className="p-col-3 text-right font-weight-bold">Language:</div>
         <div className="p-col-9">{user.language}</div>
         <div className="p-col-3 text-right font-weight-bold">Are you available to be added as a Friend?:</div>
         <div className="p-col-9">{user.friendly === true ? <span>Yes</span> : <span>No</span>}</div>
         <div className="p-col-3 text-right font-weight-bold">Date Format:</div>
         <div className="p-col-9">{user.dateformat}</div>
         <div className="p-col-3 text-right font-weight-bold">Time Format:</div>
         <div className="p-col-9">{user.timeformat}</div>
         <div className="p-col-3 text-right font-weight-bold">UI Level:</div>
         <div className="p-col-9">{user.uilevel}</div>
         <div className="p-col-3 text-right font-weight-bold">Profile Privacy Setting:</div>
         <div className="p-col-9">{user.profileprivacy}</div>
         <div className="p-col-3 text-right font-weight-bold">Private Message Options:</div>
         <div className="p-col-9">{user.messageoptions}</div>
         <div className="p-col-3 text-right font-weight-bold">Show when online?:</div>
         <div className="p-col-9">{user.showwhenonline === true ? <span>Yes</span> : <span>No</span>}</div>
         <div className="p-col-3 text-right font-weight-bold">Receive inbox notifications as email?:</div>
         <div className="p-col-9">{user.notifyemail === true ? <span>Yes</span> : <span>No</span>}</div>
         <div className="p-col-3 text-right font-weight-bold">Receive inbox notifications as SMS?:</div>
         <div className="p-col-9">{user.notifysms === true ? <span>Yes</span> : <span>No</span>}</div> 
      </div>
   );
   
};