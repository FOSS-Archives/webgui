import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import './Groups.css';
class Groups extends Component {
   constructor() {
      super();
      this.state = {
         displayBasic: false,
         position: 'center'
      };
      this.onClick = this.onClick.bind(this);
      this.onHide = this.onHide.bind(this);
   }
   
   add(){
      alert("Will implement add");
   }

   onClick() {
      this.setState({displayBasic: true});
   }

   onHide() {
      this.setState({displayBasic: false});
   }   
   
   renderFooter() {
      return (
          <div>
             <Button label="Yes" icon="pi pi-check" onClick={this.handleDelete.bind(this)} />
             <Button label="No" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary"/>
          </div>
      );
   }
   
   handleDelete() {
      alert("Delete triggered - needs implementation");
      this.onHide();
   };
   
   actionTemplate(rowData, column) {
      return (
         <div>
             <Button label="Delete" className="p-button-danger" onClick={this.onClick} />
         </div>
      );
   }
   
   render(){
      return (
         <div className="session-list">
             <Dialog header="Delete Groups" visible={this.state.displayBasic} style={{width: '50vw'}} onHide={this.onHide} footer={this.renderFooter()}>
                <p>Are you sure you want to delete this group?</p>
             </Dialog>

            <Button label="Add" className="p-button-success" onClick={this.add} />
            <DataTable value={this.props.groups} header="Groups">
               <Column field="id" header="ID" />                 
               <Column field="name" header="Group" />
               <Column header="Delete" body={this.actionTemplate.bind(this)} style={{textAlign:'center', width: '8em'}} />
            </DataTable>     
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
