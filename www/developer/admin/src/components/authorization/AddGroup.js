import React, {Component} from 'react';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';

import './AddGroup.css';
class AddGroup extends Component {
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
   
   handleDelete() {
      alert("Delete triggered - needs implementation");
      this.onHide();
   };
   
   renderFooter() {
      return (
          <div>
             <Button label="Yes" icon="pi pi-check" onClick={this.handleDelete.bind(this)} />
             <Button label="No" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary"/>
          </div>
      );
   }   
   
   render(){
      return (
         <div className="session-list">
             <Dialog header="Delete Groups" visible={this.state.displayBasic} style={{width: '50vw'}} onHide={this.onHide} footer={this.renderFooter()}>
                <p>Adding new group</p>
             </Dialog>
         </div>
      );
   }
};

export default AddGroup;
