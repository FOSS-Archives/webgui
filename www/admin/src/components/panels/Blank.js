import React from 'react';
import PropTypes from 'prop-types';
import {Panel} from 'react-bootstrap';
import {TabView,TabPanel} from 'primereact/tabview';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

const BlankComponent = props => {
   let title = (
      <h3>{props.title}</h3>
   );

   return (
     <Panel header={title} className="blank-component">
        {props.content}

        {props.display}
        <TabView activeIndex={0}>
           <TabPanel header="Header I">
            <DataTable value={[]}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
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

BlankComponent.propTypes = {
   title: PropTypes.string,
   content: PropTypes.string,
   display: PropTypes.object   
};

export default BlankComponent;