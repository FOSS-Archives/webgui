import React from 'react';
import {Button} from 'primereact/button';
import {PickList} from 'primereact/picklist';

export default ({user, source, target, onChange, dirty, updateAppSessionUser}) => {
      
   let groupTemplate = group => {
      let key = Object.keys(group)[0];
      return (
         <div className="p-clearfix" key={key}>
            <div alt={key} style={{ float: 'right' }}>{group[key]}</div>
         </div>
      );
   };   
      
   return (
      <div>
         <div>Groups</div>
         <PickList source={source} target={target} itemTemplate={groupTemplate} onChange={onChange}
            sourceHeader="Available" targetHeader="Selected" responsive={true}
            sourceStyle={{height: '300px'}} targetStyle={{height: '300px'}}
            showSourceControls={false} showTargetControls={false} />
         {dirty && <Button id="allium-save-profile" label="Save" onClick={e => updateAppSessionUser()} />}
      </div>
   );
};
