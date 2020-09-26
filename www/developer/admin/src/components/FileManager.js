import React, { Component } from 'react';
import FileManagerRenderer from './fileManagerRenderer';

export class FileManager extends Component {
   constructor(props) {
      super(props);
      this.onHide = this.onHide.bind(this);
      this.onUpload = this.onUpload.bind(this);      
   }

   onHide(){
      this.props.onHide();
   }
   onUpload() {
      this.props.onHide();
   }
   
   render() {
      let accept="image/*";
      let maxFilesize = 1000000;      
      let uploadEndpoint = process.env.REACT_APP_upload;
      
      return (
         <FileManagerRenderer accept={accept} maxFileSize={maxFilesize} uploadEndpoint={uploadEndpoint} 
            visible={this.props.visible} onHide={this.onHide} onUpload={this.onUpload} />
      );
   }
}

export default FileManager;
                 