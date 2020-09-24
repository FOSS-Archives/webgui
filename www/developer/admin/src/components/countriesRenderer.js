import React from 'react';
import {connect} from 'react-redux';
import EditableField from './EditableField';

const countriesRenderer = ({object, fieldName, fieldLabel, updateFieldState, countries}) => {
   const data = countries.map( country => {
      return { value: country, label: country };
   });

   return (
      <EditableField object={object} fieldName={fieldName} fieldLabel={fieldLabel} updateFieldState={updateFieldState} 
         fieldType="Dropdown" fieldTypeData={data} />
   );
      
};

const mapStateToProps = state => {
   return {
      countries: state.countries
   };
};

export default connect(mapStateToProps)(countriesRenderer);
