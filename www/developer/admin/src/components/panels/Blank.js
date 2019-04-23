import React from 'react';
import PropTypes from 'prop-types';
import {Panel} from 'react-bootstrap';
import {TabView,TabPanel} from 'primereact/tabview';

import 'Blank.css';
const Blank = props => {
   let title = (
      <h3>{props.title}</h3>
   );

   return (
     <Panel header={title} className="blank-component">
        {props.content}

        {props.display}
        <TabView activeIndex={0}>
           <TabPanel header="Header I">
Thank you
           </TabPanel>
           <TabPanel header="Header II">
              Content II
           </TabPanel>
           <TabPanel header="Header III">
              Content III
           </TabPanel>
        </TabView>
     </Panel>
   );  
    
};

Blank.propTypes = {
   title: PropTypes.string,
   content: PropTypes.string,
   display: PropTypes.object   
};

export default Blank;