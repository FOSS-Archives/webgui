import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Messages} from 'primereact/messages';

class Errors extends Component {
   componentDidMount() {
      if ( this.props.errors && this.messages ){
         this.props.errors.forEach( error => {
            this.messages.show({severity: 'error', summary: error.summary, detail: error.detail, sticky: true});         
         });
      }
   }

   render(){
      return <Messages ref={el => this.messages = el} />;
   }
};

const mapStateToProps = state => {
   return {
      errors: state.errors
   };
};

export default connect(mapStateToProps)(Errors);