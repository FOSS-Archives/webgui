import React from 'react';
import {BreadCrumb} from 'primereact/breadcrumb';
import {TabView,TabPanel} from 'primereact/tabview';
import Account from './Account/Account';
import Groups from './Groups';
import Preferences from './Preferences/Preferences';
import Profile from './Profile/Profile';
import UI from './UI/uiRenderer';
import FieldContext from '../../contexts/fields';

import './User.css';
export default ({user, groups, history, updateUser, saveUser}) => {
   const fixPreferenceDisplay = {
      parent: "p-grid allium-editable-field",
      label: "p-col-2 p-md-2 p-lg-3 font-weight-bold text-nowrap",
      value: "p-col-10 p-md-10 p-lg-7"
   };      
      
   let label = user.username + ' (' + user.id + ')';
   return (
      <div>
         <BreadCrumb home={{icon: 'pi pi-list', command: () => history.push('/users')}} model={[{ label: label }]} className="allium-bc" />
         <TabView>
            <TabPanel header="Account">
               <Account user={user} updateUser={updateUser} saveUser={saveUser} />
            </TabPanel>
            <TabPanel header="Profile">
               <Profile user={user} updateUser={updateUser} saveUser={saveUser} />
            </TabPanel>
            <TabPanel header="Groups" onClick={e => alert("Clicked")}>
               <Groups user={user} groups={groups} updateUser={updateUser} saveUser={saveUser} />
            </TabPanel>
            <TabPanel header="User Interface">
               <UI user={user} updateUser={updateUser} saveUser={saveUser} />
            </TabPanel>             
            <TabPanel header="Preferences">
               <FieldContext.Provider value={fixPreferenceDisplay}>
                  <Preferences user={user} updateUser={updateUser} saveUser={saveUser} />
               </FieldContext.Provider>
            </TabPanel>
         </TabView>
      </div>  
   );
};
