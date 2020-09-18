import React from 'react';
import {BreadCrumb} from 'primereact/breadcrumb';
import {TabView,TabPanel} from 'primereact/tabview';
import Account from './Account/Account';
import Groups from './Groups';
import Preferences from './Preferences';
import Profile from './Profile';
import UI from './UI'

import './User.css';
export default ({User, user, groups, history, updateUser, saveUser}) => {
   let label = user.username + ' (' + user.id + ')';
   return (
      <div>
         <BreadCrumb home={{icon: 'pi pi-list', command: () => history.push('/users')}} model={[{ label: label }]} style={{border:"none"}} />
         <TabView>
             <TabPanel header="Account">
                 <Account user={user} updateUser={updateUser} saveUser={saveUser} />
             </TabPanel>
             <TabPanel header="User Interface">
                 <UI {...user} />
             </TabPanel>             
             <TabPanel header="Profile">
                 <Profile {...user} />
             </TabPanel>
             <TabPanel header="Groups">
                 <Groups user={user} groups={groups} />
             </TabPanel>
             <TabPanel header="Preferences">
                 <Preferences {...user} />
             </TabPanel>
         </TabView>
      </div>
   );
};
