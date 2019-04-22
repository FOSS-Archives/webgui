import React from 'react';
import {TabView,TabPanel} from 'primereact/tabview';
import Account from './Account';

const User = props => {
   return (
      <TabView>
          <TabPanel header="Account">
              <Account {...props} />
          </TabPanel>
          <TabPanel header="Profile">
              Content II
          </TabPanel>
          <TabPanel header="Groups">
              Content III
          </TabPanel>
          <TabPanel header="Auth Methods">
              Content IV
          </TabPanel>
      </TabView>
   );
};

export default User;