import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteSession} from '../../actions/sessions';
import SessionListRenderer from './sessionListRenderer';

class Sessions extends Component {
   constructor() {
      super();
      this.state = {
         displayDelteDialog: false,
         id: 0
      };
      this.onClick = this.onClick.bind(this);
      this.onHide = this.onHide.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
   }

   onClick(session) {
      this.setState({displayDeleteDialog: true, id: session.id});
   }

   onHide() {
      this.setState({displayDeleteDialog: false});
   }   
   
   handleDelete() {
      this.props.deleteSession(this.props.sessions, this.state.id);
      this.onHide();
   };
     
   render(){
      return <SessionListRenderer sessions={this.props.sessions} displayDeleteDialog={this.state.displayDeleteDialog}
         onClick={this.onClick} onHide={this.onHide} handleDelete={this.handleDelete}  />;
   }
};

const mapStateToProps = state => {
   return {
      sessions: state.sessions
   };
};

export default connect(mapStateToProps, { deleteSession })(Sessions);
