import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Messages} from 'primereact/messages';

class MessageQueueRenderer extends Component {
   componentDidUpdate(prevProps, prevState, snapshot){
      if ( this.props.messages && this.messages ){
         this.props.messages.forEach( message => {
            // Severity values: success, info, warn, error
            let severity = ( message.severity != null && message.severity.trim().length > 0 ) ? message.severity : 'error'; // sensible default
            this.messages.show({severity: severity, summary: message.summary, detail: message.detail, sticky: true});
         });
      }
   }

   render(){  
      return (
         <div>
            <Messages ref={el => this.messages = el} style={{width:'95%',paddingLeft:'1em'}} />
         </div>
      );
   }
};

const mapStateToProps = state => {
   return {
      messages: state.errors
   };
};

export default connect(mapStateToProps)(MessageQueueRenderer);