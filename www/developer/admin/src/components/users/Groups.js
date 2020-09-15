import React, {Component} from 'react';
import {PickList} from 'primereact/picklist';

class Groups extends Component {
   
   constructor() {
      super();
      this.state = {
          source: [],
          target: []
      };
      this.groupTemplate = this.groupTemplate.bind(this);
      this.onChange = this.onChange.bind(this);
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
      
      this.props.user.groups = event.target.map( group => Object.keys(group)[0] );
   }
   
   groupTemplate(group) {
      let key = Object.keys(group)[0];
      return (
          <div className="p-clearfix" key={key}>
             <div alt={key} style={{ float: 'right' }}>{group[key]}</div>
          </div>
      );
    }   
   
   render() {   
      return (
          <div>
             <div>Groups</div>
             <PickList source={this.state.source} target={this.state.target} itemTemplate={this.groupTemplate}
                sourceHeader="Available" targetHeader="Selected" responsive={true}
                sourceStyle={{height: '300px'}} targetStyle={{height: '300px'}}
                showSourceControls={false} showTargetControls={false}
                onChange={this.onChange}></PickList>
         </div>
      );
   }
};

export default Groups;