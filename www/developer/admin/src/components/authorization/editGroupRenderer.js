import React from 'react';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import { Form, Field } from 'react-final-form';

import './EditGroup.css';
export default ({group, handleEdit, canShowDialog, hideDialog}) => {

   let formFormat = ({ form, handleSubmit, submitting, pristine }) => {
      return ( 
         <form onSubmit={handleSubmit}>
            <div className="p-grid">
               <div className="p-col-2"><label className="allium-text-align-right" style={{width:'100px'}}>Group:</label></div>
               <div className="p-col-10">
                  <Field name="name" initialValue={group.name}
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
                  <Field name="description" initialValue={group.description}
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
   
   let footer = () => {
      return (
         <div>
            <Button label="No" icon="pi pi-times" onClick={hideDialog} className="p-button-secondary"/>
         </div>
      );
   };
   
   return (
      <div className="session-list">
         <Dialog header="Edit Group" visible={canShowDialog} style={{width: '50vw'}} onHide={hideDialog} footer={footer()}>
            <Form onSubmit={handleEdit} render={formProps => formFormat( formProps )} />
         </Dialog>
      </div>
   );

}