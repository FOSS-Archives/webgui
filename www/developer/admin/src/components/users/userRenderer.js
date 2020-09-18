import React from 'react';
import {BreadCrumb} from 'primereact/breadcrumb';
import {TabView,TabPanel} from 'primereact/tabview';
import Account from './Account/Account';
import Groups from './Groups';
import Preferences from './Preferences/preferencesRenderer';
import Profile from './Profile/profileRenderer';

import './User.css';
export default ({user, groups, history, updateUser, saveUser}) => {
   let label = user.username + ' (' + user.id + ')';
   return (
      <div>
         <BreadCrumb home={{icon: 'pi pi-list', command: () => history.push('/users')}} model={[{ label: label }]} style={{border:"none"}} />
         <TabView>
             <TabPanel header="Account">
                 <Account user={user} updateUser={updateUser} saveUser={saveUser} />
             </TabPanel>
             <TabPanel header="Profile">
                 <Profile user={user} />
             </TabPanel>
             <TabPanel header="Groups">
                 <Groups user={user} groups={groups} />
             </TabPanel>
             <TabPanel header="User Interface">
<div>interface goes here</div>
             </TabPanel>             
             <TabPanel header="Preferences">
                 <Preferences {...user} />
             </TabPanel>
         </TabView>
      </div>
   );
};
