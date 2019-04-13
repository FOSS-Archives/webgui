import React from 'react';
import {BreadCrumb} from 'primereact/breadcrumb';

let BreadCrumbs = props => {    
   const items = [
       {label:'Categories'},
       {label:'Sports'},
       {label:'Football'},
       {label:'Countries'},
       {label:'Spain'},
       {label:'F.C. Barcelona'},
       {label:'Squad'},
       {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
   ];      
      
   return <BreadCrumb model={items} home={{icon: 'pi pi-folder-open', url: '/'}} />;
};

export default BreadCrumbs;