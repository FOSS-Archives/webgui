import React from 'react';
import {connect} from 'react-redux';
import {BreadCrumb} from 'primereact/breadcrumb';
import {TabView,TabPanel} from 'primereact/tabview';
import Account from './Account';
import Auths from './Auths';
import Groups from './Groups';
import Profile from './Profile';

const User = props => {
   if (!props.users){
      props.history.push('/');
   }
   
   let user = props.users.find( user => {
      if ( user.id === props.match.params.id ){
         return user;
      }
      return null;
   });
   
   if (!user){
      props.history.push('/');
   }
   
   let label = user.username + ' (' + user.id + ')';
   
   return (
      <div>
         <BreadCrumb home={{icon: 'pi pi-list', url: '/users'}} model={[{ label: label }]} />
         <TabView>
             <TabPanel header="Account">
                 <Account {...user} />
             </TabPanel>
             <TabPanel header="Profile">
                 <Profile {...user} />
             </TabPanel>
             <TabPanel header="Groups">
                 <Groups {...user} />
             </TabPanel>
             <TabPanel header="Auth Methods">
                 <Auths {...user} />
             </TabPanel>
         </TabView>
      </div>
   );
};

const mapStateToProps = state => {
   return {
      users: state.users
   };   
};

export default connect(mapStateToProps)(User);
