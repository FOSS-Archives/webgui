import React from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";

import 'react-web-tabs/dist/react-web-tabs.css';
const Profile = props => {
   
console.log(props);   
   if (!props.username){
      return <div>Nothing found</div>;
   }
   
   return (
      <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
        <TabList>
          <Tab tabFor="vertical-tab-one">Tab 1</Tab>
          <Tab tabFor="vertical-tab-two">Tab 2</Tab>
          <Tab tabFor="vertical-tab-three">Tab 3</Tab>
        </TabList>

        <TabPanel tabId="vertical-tab-one">
          <p>Tab 1 content</p>
        </TabPanel>

        <TabPanel tabId="vertical-tab-two">
          <p>Tab content</p>
        </TabPanel>

        <TabPanel tabId="vertical-tab-three">
          <p>Tab 3 content</p>
        </TabPanel>
      </Tabs>
   );
};

export default Profile;
   
   /* 
    *  please go ahead and suggest a structure, but do `show table userProfileField` and `show table `userProfileCategory` w.r.t categories. 
    *  you may or may not want to include that in the structure.
    */