import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import './Sessions.css';
class Sessions extends Component {
   constructor() {
      super();
      this.state = {
         selected: null
      };
   }
  
   render(){
      
console.log(this.props.sessions);      
      
      return (
         <div className="session-list">
            <DataTable value={this.props.sessions} selectionMode="single" header="Sessions" selection={this.state.selected}
               onSelectionChange={e => this.displaySelection(e)}>
               <Column field="id" header="ID" />                 
               <Column field="uid" header="Username" />
               <Column field="created" header="Created" />
               <Column field="last_view" header="Last View" />
               <Column field="expires" header="Expires" />
               <Column field="ip" header="Source IP" />
            </DataTable>     
         </div>
      );
   }
};

const mapStateToProps = state => {
   return {
      sessions: state.sessions
   };
};

const routed = withRouter(Sessions);

export default connect(mapStateToProps)(routed);
