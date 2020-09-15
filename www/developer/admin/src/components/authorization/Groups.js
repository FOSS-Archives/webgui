import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addGroup, deleteGroup, fetchGroups, setGroup, updateGroup} from '../../actions/groups';
import GroupRenderer from './groupsRenderer';

class Groups extends Component {
   constructor(props) {
      super(props);
      this.state = {
         displayAddDialog: false,
         displayEditDialog: false,
         displayDeleteDialog: false
      };
   }
   
   handleAdd(group){
      this.props.addGroup(group);
      this.props.fetchGroups(); // Need to get all the groups again because the recently added group does not have an id
      this.setState({displayAddDialog: false});
   };   
   
   handleDelete(e) {
      this.props.deleteGroup(this.props.groups, this.props.group.id);
      this.setState({displayDeleteDialog: false});
   };
   
   handleEdit(edited){
      let group = {
         ...this.props.group,
         ...edited
      };
      this.props.updateGroup(this.props.groups, group);
      this.setState({displayEditDialog: false});
   };   

   showDeleteDialog(group){
      this.props.setGroup(group);      
      this.setState({displayDeleteDialog: true});
   };
   
   showEditDialog(group){
      this.props.setGroup(group);
      this.setState({displayEditDialog: true});
   }
   
   render(){
      return (<GroupRenderer groups={this.props.groups} group={this.props.group}         
         hideAddDialog={e => this.setState({displayAddDialog: false})}
         hideDeleteDialog={e => this.setState({displayDeleteDialog: false})}
         hideEditDialog={e => this.setState({displayEditDialog: false})}
         showAddDialog={e => this.setState({displayAddDialog: true})}
         showDeleteDialog={this.showDeleteDialog.bind(this)}
         showEditDialog={this.showEditDialog.bind(this)}         

         isAddVisible={this.state.displayAddDialog}
         isDeleteVisible={this.state.displayDeleteDialog}
         isEditVisible={this.state.displayEditDialog}

         handleAdd={this.handleAdd.bind(this)}
         handleDelete={this.handleDelete.bind(this)}
         handleEdit={this.handleEdit.bind(this)}
         />
      );
   }
};

const mapStateToProps = state => {
   return {
      groups: state.groups,
      group: state.group
   };
};

export default connect(mapStateToProps, {addGroup,deleteGroup,fetchGroups,setGroup,updateGroup})(Groups);
