import React from 'react';

const Profile = props => {
   if (!props.user){
      return <div>Nothing found</div>;
   }
   
   return (
      <div className="p-grid">
         <div className="p-col-1 text-right font-weight-bold">ID:</div>
         <div className="p-col-11">onee</div>
      </div>
   );
};

export default Profile;