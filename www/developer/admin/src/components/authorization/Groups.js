import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import AddGroup from './AddGroup';

import './Groups.css';
class Groups extends Component {
   constructor(props) {
      super(props);
      this.state = {
         displayAddDialog: false,
         displayDeleteDialog: false,
         position: 'center'
      };
   }
   
   renderFooter() {
      return (
          <div>
             <Button label="Yes" icon="pi pi-check" onClick={this.handleDelete.bind(this)} />
             <Button label="No" icon="pi pi-times" onClick={e => this.setState({displayDeleteDialog: false})} className="p-button-secondary"/>
          </div>
      );
   }
   
   handleDelete() {
      alert("Delete triggered - needs implementation");
      this.setState({displayDeleteDialog: false});
   };
   
   actionTemplate(rowData, column) {
      return <Button label="Delete" className="p-button-danger" onClick={e => this.setState({displayDeleteDialog: true})} />;
   }
   
   render(){
      return (
         <div className="session-list">
            <Button label="Add" className="p-button-success" onClick={e => this.setState({displayAddDialog: true})} />
            <DataTable value={this.props.groups} header="Groups">
               <Column field="id" header="ID" />                 
               <Column field="name" header="Group" />
               <Column header="Delete" body={() => this.actionTemplate()} style={{textAlign:'center', width: '8em'}} />
            </DataTable>     

            <Dialog header="Delete Groups" visible={this.state.displayDeleteDialog} style={{width: '50vw'}} onHide={e => this.setState({displayDeleteDialog: false})} footer={this.renderFooter()}>
               <p>Are you sure you want to delete this group?</p>
            </Dialog>
            
            <AddGroup canShowDialog={this.state.displayAddDialog} hideDialog={e => this.setState({displayAddDialog: false})}  />
         </div>
      );
   }
};

const mapStateToProps = state => {
   return {
      groups: state.groups
   };
};

const routed = withRouter(Groups);

export default connect(mapStateToProps)(routed);
