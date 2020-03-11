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
      let allGroups = this.props.groups;
      let userAssignedGroupIds = this.props.user.groups;
      let unnassignedGroups = [];
      let userAssignedGroups = allGroups.filter( group => {
            // Strip out the unnasigned groups to be displayed in the available groups.
            if ( ! userAssignedGroupIds.includes(Object.keys(group)[0]) ){
               unnassignedGroups.push(group);
            }
            return userAssignedGroupIds.includes(Object.keys(group)[0]);
         }).map( group => { 
            return group;
         });
      this.setState({source: unnassignedGroups, target: userAssignedGroups});

   }

   onChange(event) {
      this.setState({
         source: event.source,
         target: event.target
      });
      this.props.user.groups = Object.keys(this.state.target);

   }
   
   groupTemplate(group) {
      let key = Object.keys(group)[0];
      return (
          <div className="p-clearfix">
             <div style={{ float: 'right' }} alt={key}>{group[key]}</div>
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
                onChange={this.onChange}></PickList>
         </div>
      );
   }
};

export default Groups;