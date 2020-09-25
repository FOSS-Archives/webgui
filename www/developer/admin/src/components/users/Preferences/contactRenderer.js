import React, {useState} from 'react';
import isEqual from 'react-fast-compare';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';

import './Contact.css';
export default ({user, updateUser, saveUser}) => {
   const [dirty, setDirty] = useState(false);
   const [stateUser, updateStateUser] = useState(user);
   
   const updateField = (event) => {
      let updated = { ...stateUser, ...{[event.target.name]: event.checked} };
      let modified = !isEqual(user, updated);
      setDirty(modified);
      updateStateUser(updated);
   };
   
   const updateAppSessionUser = () => {
      saveUser(stateUser);
      updateUser(stateUser);
      setDirty(false);
   };   
   
   return (
      <div>
         <div className="p-grid">
            <div className="p-col-3 text-right font-weight-bold">Language:</div>
            <div className="p-col-9">{user.language}</div>
            <div className="p-col-3 text-right font-weight-bold">Are you available to be added as a Friend?:</div>
            <div className="p-col-9"><Checkbox checked={stateUser.friendly} name="friendly" onChange={e => updateField(e)} /></div>
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
            <div className="p-col-9"><Checkbox checked={stateUser.showwhenonline} name="showwhenonline" onChange={e => updateField(e)} /></div>
            <div className="p-col-3 text-right font-weight-bold">Receive inbox notifications as email?:</div>
            <div className="p-col-9"><Checkbox checked={stateUser.notifyemail} name="notifyemail" onChange={e => updateField(e)} /></div>
            <div className="p-col-3 text-right font-weight-bold">Receive inbox notifications as SMS?:</div>
            <div className="p-col-9"><Checkbox checked={stateUser.notifysms} name="notifysms" onChange={e => updateField(e)} /></div> 
         </div>
         {dirty && <Button label="Save" onClick={e => updateAppSessionUser()} />}
      </div>
   );
   
};