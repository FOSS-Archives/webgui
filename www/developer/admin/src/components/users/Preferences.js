import React from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";

const Preferences = props => {
   
   return (
      <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
        <TabList>
          <Tab tabFor="vertical-tab-auth">Authentication</Tab>        
          <Tab tabFor="vertical-tab-misc">Miscellaneous</Tab>
        </TabList>

        <TabPanel tabId="vertical-tab-auth">
          <p>Authentication Information</p>
        </TabPanel>

        <TabPanel tabId="vertical-tab-misc">
          <p>Miscellaneous Information</p>
        </TabPanel>        
      </Tabs>
   );
};

export default Preferences;