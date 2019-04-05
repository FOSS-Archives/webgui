import React, {Component} from 'react';
import {Panel} from 'primereact/panel';
import {Button} from 'primereact/button';
import {connect} from 'react-redux';
import './LoginContainer.css';
import login from '../actions/authentication';

class LoginContainer extends Component {
   
   constructor(props){
      super(props);
      this.state = {
         login: '',
         password: ''
      };
   }
   
   onLogin = event => {
      event.preventDefault();
      this.props.login(this.state.login, this.state.password);
      
   }
   
   onClear = event => {
      event.preventDefault();
      this.setState({login:'', password:''});
   }
   
   onLogout = event => {
      event.preventDefault();
      this.props.login('','');
      
   }
   
   render(){
      if ( this.props.authenticated ){
         return <Button label="Logout" icon="pi pi-power-off" className="p-button-danger" onClick={this.onLogout} style={{marginLeft:4}} />;
      }
      return (
         <div className="p-grid">
            <div className="p-col-4"></div>
            <div className="p-col-4">
                <Panel header="Admin Login">
                   <form>
                     <div className="p-grid">
                        <div className="p-col-2"><label>Username:</label></div>
                        <div className="p-col-10">
                           <input value={this.state.login} type="text" onChange={e => this.setState({login: e.target.value})} style={{ width: "100%" }} />
                        </div>
                        <div className="p-col-2"><label>Password:</label></div>
                        <div className="p-col-10">
                           <input value={this.state.password} type="password" onChange={e => this.setState({password: e.target.value})} style={{ width: "100%" }} />
                        </div>  
                        <div className="p-col-2"><button type="submit" onClick={this.onLogin}>Submit</button></div>
                        <div className="p-col-10"><button type="button" onClick={this.onClear}>Clear Values</button></div>    
                     </div>
                   </form>
                </Panel>
            </div>
            <div className="p-col-4"></div>
         </div>
      );
      
   }   
};

const mapStateToProps = state => {
   return {
      authenticated: state.authenticated
   };
};

export default connect(mapStateToProps, {login})(LoginContainer);