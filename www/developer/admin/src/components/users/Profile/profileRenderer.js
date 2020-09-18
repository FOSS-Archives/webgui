import React from 'react';
import {Fieldset} from "primereact/fieldset";
import Contact from './contactRenderer';
import Home from './homeRenderer';
import Personal from './personalRenderer';
import Work from './workRenderer';

export default ({user, index}) => {
   return (
      <div>
        <Fieldset legend="Contact">
           <Contact {...user} />
        </Fieldset>

        <Fieldset legend="Home">
           <Home {...user} />
        </Fieldset>
        
        <Fieldset legend="Personal">
           <Personal {...user} />
        </Fieldset>
        
        <Fieldset legend="Work">
           <Work {...user} />
        </Fieldset>        
      </div>
   );
};

   /* 
    *  please go ahead and suggest a structure, but do `show table userProfileField` and `show table `userProfileCategory` w.r.t categories. 
    *  you may or may not want to include that in the structure.
    */