import React from 'react';
import {Panel} from 'primereact/panel';
import AvatarRenderer from './avatarRenderer';
import PhotoRenderer from './photoRenderer';

export default ({user, updateField}) => {
   return (
      <Panel header="Media">
         <PhotoRenderer user={user} updateFieldState={updateField} />
         <AvatarRenderer user={user} updateFieldState={updateField} />
      </Panel>
   );
};