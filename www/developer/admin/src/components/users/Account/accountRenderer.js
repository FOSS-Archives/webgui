import React from 'react';
import Alias from './aliasRenderer';
import Avatar from './avatarRenderer';
import DateCreated from './dateCreatedRenderer';
import FirstName from './firstNameRenderer';
import LastName from './lastNameRenderer';
import LastUpated from './lastUpdatedRenderer';
import Photo from './photoRenderer';
import Signature from './signatureRenderer';
import Username from './usernameRenderer';

export default ({user, updateField}) => {
   return (
      <div>
         <Username user={user} updateField={updateField} />     
         <Alias user={user} updateField={updateField} />
         <DateCreated {...user} />
         <LastUpated {...user} />
         <FirstName user={user} updateField={updateField} />
         <LastName user={user} updateField={updateField} />
         <Signature user={user} updateField={updateField} />
         <Photo user={user} updateField={updateField} />
         <Avatar user={user} updateField={updateField} />
      </div>
   );
};