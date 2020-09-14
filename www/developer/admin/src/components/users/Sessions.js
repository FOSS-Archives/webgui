import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {deleteSession} from '../../actions/sessions';

import './Sessions.css';
class Sessions extends Component {
   constructor() {
      super();
      this.state = {
         displayBasic: false,
         id: 0,
         position: 'center'
      };
      this.onClick = this.onClick.bind(this);
      this.onHide = this.onHide.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
   }

   onClick(session) {
      this.setState({displayBasic: true, id: session.id});
   }

   onHide() {
      this.setState({displayBasic: false});
   }   
   
   renderFooter() {
      return (
         <div>
            <Button label="Yes" icon="pi pi-check" onClick={this.handleDelete} />
            <Button label="No" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary"/>
         </div>
      );
   }
   
   handleDelete() {
      this.props.deleteSession(this.props.sessions, this.state.id);
      this.onHide();
   };
   
   actionTemplate(rowData, column) {
      return (
         <div>
             <Button label="Delete" className="p-button-danger" onClick={e => this.onClick(rowData)} />
         </div>
      );
   }
   
   render(){
      return (
         <div className="session-list">
             <Dialog header="Delete Session" visible={this.state.displayBasic} style={{width: '50vw'}} onHide={this.onHide} footer={this.renderFooter()}>
                <p>Are you sure you want to delete this session?</p>
             </Dialog>

            <DataTable value={this.props.sessions} header="Sessions">
               <Column field="id" header="ID" />                 
               <Column field="username" header="Username" />
               <Column field="created" header="Created" />
               <Column field="last_view" header="Last View" />
               <Column field="expires" header="Expires" />
               <Column field="ip" header="Source IP" />
               <Column header="Kill Session" body={this.actionTemplate.bind(this)} style={{textAlign:'center', width: '8em'}} />
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

export default connect(mapStateToProps, { deleteSession })(routed);
