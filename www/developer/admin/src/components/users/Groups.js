import React, {Component} from 'react';
import isEqual from 'react-fast-compare';
import GroupRenderer from './groupRenderer';

class Groups extends Component {
   
   constructor(props) {
      super(props);
      this.state = {
          source: [],
          target: [],
          dirty: false,
          user: this.props.user
      };
      this.onChange = this.onChange.bind(this);
      this.updateAppSessionUser = this.updateAppSessionUser.bind(this);
   }

   componentDidMount() {
      let groups = this.props.groups;
      let userGroupIds = this.props.user.groups;
      let unnassignedGroups = [];
      let userAssignedGroups = groups.filter( group => {
         let groupId =  group.id.toString() ;
         // Strip out the unnasigned groups to be displayed in the available groups.
         if ( ! userGroupIds.includes(groupId) ){
            unnassignedGroups.push( {[group.id]: group.name} );
         }
         return userGroupIds.includes(groupId);
         
      }).map( group => { 
         return {[group.id]: group.name};
         
      });      
      this.setState({source: unnassignedGroups, target: userAssignedGroups});
         
   }

   onChange(event) {
      this.setState({
         source: event.source,
         target: event.target
      });
      
      let groups = event.target.map( group => Object.keys(group)[0] );
      let modifiedUser = { ...this.state.user, ...{"groups": groups} };
      let modified = !isEqual(this.props.user, modifiedUser);
      this.setState({ user: modifiedUser, dirty: modified });
      modified && this.props.updateUser(modifiedUser);
  
   }
      
   updateAppSessionUser(){
      this.setState({ dirty: false });      
      this.props.saveUser(this.state.user);
   };
 
   
   render() {   
      return <GroupRenderer user={this.state.user} source={this.state.source} target={this.state.target} 
         onChange={e => this.onChange(e)} dirty={this.state.dirty} updateAppSessionUser={this.updateAppSessionUser} />;
   }
};

export default Groups;