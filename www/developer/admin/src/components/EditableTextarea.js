import React, { Component } from 'react';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {Editor} from 'primereact/editor';

class EditableTextarea extends Component {
   constructor(props){
      super(props);
      this.state = {
         text: this.props.text
      };
      this.saveFieldValue = this.saveFieldValue.bind(this); 
   }
   
   saveFieldValue(){
      this.props.onSave(this.props.field, this.state.text);
      this.props.onHide();
   }
   
   footer(){
      return (
         <div>
           <Button label="Yes" icon="pi pi-check" onClick={() => this.saveFieldValue()} />
           <Button label="No" icon="pi pi-times" onClick={this.props.onHide} />
         </div>
      );
   }
   
   render() {
      return (
         <Dialog header={"Edit " + this.props.field} visible={this.props.active} onHide={this.props.onHide} footer={this.footer()} style={{ width: '50vw' }}>
            <div className="card">
               <Editor value={this.state.text} onTextChange={e => this.setState({text: e.htmlValue})} />
            </div>
         </Dialog>
      );
   }
};

export default EditableTextarea;