import React, {useState} from 'react';
import {Button} from 'primereact/button';
import {Panel} from 'primereact/panel';
import AvatarRenderer from './avatarRenderer';
import PhotoRenderer from './photoRenderer';
import FileManager from '../../FileManager';

export default ({user, updateField}) => {
   const [visible, setVisible] = useState(false);
   
   return (
      <Panel header="Media">
         <PhotoRenderer user={user} updateFieldState={updateField} />
         <AvatarRenderer user={user} updateFieldState={updateField} />
         <Button label="Upload" onClick={() => setVisible(true)} />
         <FileManager visible={visible} onHide={() => setVisible(false)} />
      </Panel>
   );
};