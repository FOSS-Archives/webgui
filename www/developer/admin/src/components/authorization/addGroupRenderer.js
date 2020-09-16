import React from 'react';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import { Form, Field } from 'react-final-form';
import './AddGroup.css';
export default ({handleAdd, canShowDialog, hideDialog}) => {

   let renderFooter = () => {
      return (
         <div>
            <Button label="No" icon="pi pi-times" onClick={e => hideDialog()} className="p-button-secondary"/>
         </div>
      );
   };
   
   let formFormat = ({ form, handleSubmit, submitting, pristine }) => {
      return ( 
         <form onSubmit={handleSubmit}>
            <div className="p-grid">
               <div className="p-col-2"><label className="allium-text-align-right" style={{width:'100px'}}>Group:</label></div>
               <div className="p-col-10">
                  <Field name="name"
                     render={({ input, meta }) => (
                        <div>
                           <input {...input} size="50" placeholder="group name" />
                           {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                     )}
                  />
               </div>
               
               <div className="p-col-2"><label className="allium-text-align-right" style={{width:'100px'}}>Description:</label></div>
               <div className="p-col-10">
                  <Field name="description"
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
   
   return (
      <div className="session-list">
         <Dialog header="Add Group" visible={canShowDialog} style={{width: '50vw'}} onHide={hideDialog} footer={renderFooter()}>
            <Form onSubmit={handleAdd} render={formProps => formFormat( formProps )} />
         </Dialog>
      </div>
   );
};


