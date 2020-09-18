import React from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import Contact from './contactRenderer';
import Home from './homeRenderer';
import Personal from './personalRenderer';
import Work from './workRenderer';

export default ({user}) => {
   return (
      <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
        <TabList>
          <Tab tabFor="vertical-tab-contact">Contact</Tab>        
          <Tab tabFor="vertical-tab-home">Home</Tab>
          <Tab tabFor="vertical-tab-personal">Personal</Tab>          
          <Tab tabFor="vertical-tab-work">Work</Tab>          
        </TabList>

        <TabPanel tabId="vertical-tab-contact">
           <Contact {...user} />
        </TabPanel>

        <TabPanel tabId="vertical-tab-home">
           <Home {...user} />
        </TabPanel>
        
        <TabPanel tabId="vertical-tab-personal">
           <Personal {...user} />
        </TabPanel>
        
        <TabPanel tabId="vertical-tab-work">
           <Work {...user} />
        </TabPanel>        
      </Tabs>
   );
};

   /* 
    *  please go ahead and suggest a structure, but do `show table userProfileField` and `show table `userProfileCategory` w.r.t categories. 
    *  you may or may not want to include that in the structure.
    */