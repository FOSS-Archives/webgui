import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import AddGroup from './AddGroup';
import EditGroup from './EditGroup';
import {deleteGroup, groups as fetchGroups, setGroup} from '../../actions/groups';

import './Groups.css';
class Groups extends Component {
   constructor(props) {
      super(props);
      this.state = {
         displayAddDialog: false,
         displayDeleteDialog: false,
         displayEditDialog: false,
         id: 0,
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
   
   handleDelete(e) {
      this.props.deleteGroup(this.props.groups, this.state.id);
      this.setState({displayDeleteDialog: false, id: 0});
   };
   
   setDelete(rowData,column){
      this.setState({displayDeleteDialog: true, id: rowData.id});
   };
   
   actionTemplate(rowData, column) {
      return <Button label="Delete" className="p-button-danger" onClick={e => this.setDelete(rowData)} />;
   }
   
   editTemplate(rowData){
      return <Button onClick={e => this.setEditGroup(rowData)} label={rowData.id.toString()} tooltip="Edit" className="p-button-secondary p-button-text" />;
   }
   setEditGroup(group){
      this.props.setGroup(group);
      this.setState({displayEditDialog: true});
   }
   
   render(){
      return (
         <div className="session-list">
            <Button label="Add" className="p-button-success" onClick={e => this.setState({displayAddDialog: true})} />
            <DataTable value={this.props.groups} header="Groups">
               <Column field="id" header="ID" style={{width:'10%', textAlign:'right'}} body={this.editTemplate.bind(this)} />
               <Column field="name" header="Group" />
               <Column field="description" header="Description" />               
               <Column header="Delete" body={this.actionTemplate.bind(this)} style={{textAlign:'center', width: '8em'}} />
            </DataTable>     

            <Dialog header="Delete Groups" visible={this.state.displayDeleteDialog} style={{width: '50vw'}} onHide={e => this.setState({displayDeleteDialog: false})} footer={this.renderFooter()}>
               <p>Are you sure you want to delete this group?</p>
            </Dialog>
            
            <AddGroup canShowDialog={this.state.displayAddDialog} hideDialog={e => this.setState({displayAddDialog: false})}  />
            <EditGroup canShowDialog={this.state.displayEditDialog} hideDialog={e => this.setState({displayEditDialog: false})}  />
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

export default connect(mapStateToProps, {deleteGroup,fetchGroups,setGroup})(routed);
