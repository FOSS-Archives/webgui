import React from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import UI from './UI';

export default ({user}) => {
   
   return (
      <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
        <TabList>
          <Tab tabFor="vertical-tab-auth">Authentication</Tab>        
          <Tab tabFor="vertical-tab-misc">Miscellaneous</Tab>
        </TabList>

        <TabPanel tabId="vertical-tab-auth">
          <p>Authentication Information</p>
          <UI {...user} />
        </TabPanel>

        <TabPanel tabId="vertical-tab-misc">
          <p>Miscellaneous Information</p>
        </TabPanel>        
      </Tabs>
   );
};
