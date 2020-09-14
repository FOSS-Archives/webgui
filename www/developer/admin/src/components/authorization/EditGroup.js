import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import { Form, Field } from 'react-final-form';
import errors from '../../actions/errors';
import {updateGroup} from '../../actions/groups';

import './EditGroup.css';
class EditGroup extends Component {
   
   handleEdit = async edited => {
      let group = {
         ...this.props.group,
         ...edited
      };
      this.props.updateGroup(this.props.groups, group);
      this.props.hideDialog();
   };

   renderFooter = () => {
      return (
         <div>
            <Button label="No" icon="pi pi-times" onClick={this.props.hideDialog} className="p-button-secondary"/>
         </div>
      );
   };
   
   formFormat = ({ form, handleSubmit, submitting, pristine }) => {
      return ( 
         <form onSubmit={handleSubmit}>
            <div className="p-grid">
               <div className="p-col-2"><label className="allium-text-align-right" style={{width:'100px'}}>Group:</label></div>
               <div className="p-col-10">
                  <Field name="name" initialValue={this.props.group.name}
                     render={({ input, meta }) => (
                        <div>
                           <input {...input} size="50" placeholder="group name"  />
                           {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                     )}
                  />
               </div>
               
               <div className="p-col-2"><label className="allium-text-align-right" style={{width:'100px'}}>Description:</label></div>
               <div className="p-col-10">
                  <Field name="description" initialValue={this.props.group.description}
                     render={({ input, meta }) => (
                        <div>
                           <textarea {...input} cols="50" rows="10" placeholder="Group description" />
                           {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                     )}
                  />
               </div>
               
               <div className="p-col-2"></div>
               <div className="p-col-10"><button type="submit" disabled={submitting || pristine}>Submit</button></div>
            </div>
         </form>
      );
   };   
   
   render(){
      return (
         <div className="session-list">
            <Dialog header="Edit Group" visible={this.props.canShowDialog} style={{width: '50vw'}} onHide={this.props.hideDialog} footer={this.renderFooter()}>
               <Form onSubmit={this.handleEdit.bind(this)} render={formProps => this.formFormat( formProps )} />
            </Dialog>
         </div>
      );
   }
};

const mapStateToProps = state => {
   return {
      group: state.group,
      groups: state.groups
   };
};

export default connect(mapStateToProps,{updateGroup, errors})(EditGroup);


