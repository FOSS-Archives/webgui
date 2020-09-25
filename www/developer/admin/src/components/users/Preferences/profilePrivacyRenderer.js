import React from 'react';
import {RadioButton} from 'primereact/radiobutton';
import {connect} from 'react-redux';

const ProfilePrivacyRenderer = ({fieldValue, updateFieldState, context, preferences}) => {
   const radioComponents = preferences.profileprivacy.map( privacy => {
      let key = Object.keys(privacy)[0];
      let value = privacy[key];
      let labelId = value + "-" + key;
      return (
         <div className="allium-privacy-radio text-nowrap">
            <RadioButton value={key} onChange={e => updateFieldState("profileprivacy",key)} checked={fieldValue === key} 
               id={labelId} key={key} name="privacy" />
            <label for={labelId} className="text-nowrap">{value}</label>
         </div>
      );
   });

   return (
      <div className={context.parent}>
         <div className={context.label}>Profile Privacy:</div>
         <div className={context.value}>
            <div className="allium-privacy-group">
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

export default connect(mapStateToProps)(ProfilePrivacyRenderer);
