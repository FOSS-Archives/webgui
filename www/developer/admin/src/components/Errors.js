import React from 'react';
import {connect} from 'react-redux';
import {Messages} from 'primereact/messages';

const Errors = props => {
   const showSticky = () => {
      props.messages.show({severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me', sticky: true});
   };
   showSticky();
   
   if (props.errors) {
      return <Messages ref={el => this.messages = el} />;
   }
   return '';
};

const mapStateToProps = state => {
   return {
      errors: state.erros
   };
};

export default connect(mapStateToProps)(Errors);