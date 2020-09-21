import React, { Component } from 'react';
import {Button} from 'primereact/button';
import {OverlayPanel} from 'primereact/overlaypanel';
import {Editor} from 'primereact/editor';

import './EditableTextarea.css';
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
   
   render() {
      return (
         <div id="allium-editable-textarea">
            <i className="pi pi-pencil" onClick={(e) => this.op.toggle(e)} aria-haspopup aria-controls="overlay_panel"></i>
            <OverlayPanel id="overlay_panel" ref={(el) => this.op = el} showCloseIcon>              
               <div className="card">
                  <Editor value={this.state.text} onTextChange={e => this.setState({text: e.htmlValue})} />
               </div>
               <Button label="Save" icon="pi pi-check" onClick={() => this.saveFieldValue()} />
            </OverlayPanel>
         </div>
      );
   }
};

export default EditableTextarea;