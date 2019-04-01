import React, {Component} from 'react';
import BlankPanel from './panels/Blank';
import Login from './LoginContainer';
import NavigationTop from './navigation/NavigationTopContainer';
import BreadCrumbs from './navigation/BreadCrumbs';
//import Location from './Location';

class MainContainer extends Component {

   constructor(props) {
      super(props);
      this.state = { authenticated: false };
      //Location();
   }

   loginAction = auth => {
      if (auth.login === 'admin' && auth.password === '123qwe'){
         this.setState({authenticated: true});
      }else{
         console.log('Invalid login and password.');
         console.log(auth);
      }
      
   }
   
   render() {     
      if (!this.state.authenticated){      
         return (
            <div  style={{ paddingTop: '40px'}}>
               <Login onLogin={this.loginAction} />
            </div>
         );
         
      }else{
         return (
             <div>
                <NavigationTop authenticated={this.state.authenticated} />
                <BreadCrumbs />
                <BlankPanel />
             </div>              
         );         
 
      }
   }
}

export default MainContainer;