import React from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import Contact from './Profile/Contact';
import Home from './Profile/Home';
import Personal from './Profile/Personal';
import Work from './Profile/Work';

import 'react-web-tabs/dist/react-web-tabs.css';
const Profile = props => {
   if (!props.username){
      return <div>Nothing found</div>;
   }
   
   return (
      <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
        <TabList>
          <Tab tabFor="vertical-tab-contact">Contact</Tab>        
          <Tab tabFor="vertical-tab-home">Home</Tab>
          <Tab tabFor="vertical-tab-personal">Personal</Tab>          
          <Tab tabFor="vertical-tab-work">Work</Tab>          
        </TabList>

        <TabPanel tabId="vertical-tab-contact">
           <Contact {...props} />
        </TabPanel>

        <TabPanel tabId="vertical-tab-home">
           <Home {...props} />
        </TabPanel>
        
        <TabPanel tabId="vertical-tab-personal">
           <Personal {...props} />
        </TabPanel>
        
        <TabPanel tabId="vertical-tab-work">
           <Work {...props} />
        </TabPanel>        
      </Tabs>
   );
};

export default Profile;
   
   /* 
    *  please go ahead and suggest a structure, but do `show table userProfileField` and `show table `userProfileCategory` w.r.t categories. 
    *  you may or may not want to include that in the structure.
    */