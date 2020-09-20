import React from 'react';
import AvatarRenderer from '../../media/avatarRenderer';

export default ({user, updateField}) => {
   return (
      <div className="p-grid allium-editable-field">
         <div className="p-col-2 p-md-2 p-lg-2 font-weight-bold text-nowrap">Avatar:</div>
         <AvatarRenderer src={user.avatar} altText="Avatar" height="100" width="100" className="p-col-10 p-md-10 p-lg-4" />
      </div>
   );
};