import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import './Sessions.css';
class Sessions extends Component {
   constructor() {
      super();
      this.state = {
         displayBasic: false,
         position: 'center'
      };
      this.onClick = this.onClick.bind(this);
      this.onHide = this.onHide.bind(this);
   }

   onClick(name, position) {
      this.setState({displayBasic: true});
   }

   onHide(name) {
      this.setState({displayBasic: false});
   }   
   
   renderFooter(name) {
      return (
          <div>
             <Button label="Yes" icon="pi pi-check" onClick={() => { this.onHide(name); }} />
             <Button label="No" icon="pi pi-times" onClick={() => { this.onHide(name); }} className="p-button-secondary"/>
          </div>
      );
   }
   
   handleDelete() {
      console.log("Delete triggered");
      alert("Delete triggered");
      
      
   };
   
   actionTemplate(rowData, column) {
      return (
         <div>
             <Button label="Delete" className="p-button-danger" onClick={this.handleDelete} />
         </div>
      );
   }
  
   render(){
      return (
         <div className="session-list">
             <Dialog header="Godfather I" visible={this.state.displayBasic} style={{width: '50vw'}} onHide={() => { this.onHide('displayBasic'); }} footer={this.renderFooter('displayBasic')}>
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                            His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                            Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                            kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
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

export default connect(mapStateToProps)(routed);
