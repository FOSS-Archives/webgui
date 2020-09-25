import React from 'react';
import {RadioButton} from 'primereact/radiobutton';
import {connect} from 'react-redux';

const RadioRenderer = ({fieldName, fieldLabel, fieldValue, updateFieldState, context, preferences}) => {
   const radioComponents = preferences.profileprivacy.map( privacy => {
      let key = Object.keys(privacy)[0];
      let value = privacy[key];
      let labelId = value + "-" + key;
      return (
         <div className="allium-radio text-nowrap">
            <RadioButton value={key} checked={fieldValue === key} onChange={e => updateFieldState(fieldName,key)} 
               id={labelId} key={key} name={fieldName} />
            <label for={labelId} className="text-nowrap">{value}</label>
         </div>
      );
   });

   return (
      <div className={context.parent}>
         <div className={context.label}>{fieldLabel}</div>
         <div className={context.value}>
            <div className="allium-radio-group">
               {radioComponents}
            </div>
         </div>
      </div>
   );
      
};

const mapStateToProps = state => {
   return {
      preferences: state.preferences
   };
};

export default connect(mapStateToProps)(RadioRenderer);
