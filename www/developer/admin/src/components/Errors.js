import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Messages} from 'primereact/messages';

class Errors extends Component {
   showSticky = () => {
      this.props.errors.each( error => {
         this.messages.show({severity: 'error', summary: error.summary, detail: error.detail, sticky: true});         
      });
   };

   render(){
      if (this.props.errors) {
         this.showSticky();
         return <Messages ref={el => this.messages = el} />;
      }
      return '';
   }
};

const mapStateToProps = state => {
   return {
      errors: state.erros
   };
};

export default connect(mapStateToProps)(Errors);