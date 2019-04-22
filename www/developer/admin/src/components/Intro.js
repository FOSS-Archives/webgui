import React from 'react';
//import Location from './Location';
import {Card} from 'primereact/card';

export default () => {
   return (
      <Card>
      <h2>WebGUI is a mature, feature rich Content Management System.</h2>
      <h3>It's written in Perl and licensed under the GNU GPL. Some features include:</h3>  
         <ul>
         <li>Hierarchical permissions</li>
         <li>Groups of groups of groups (etc)</li>
         <li>Asset versioning</li>
         <li>A workflow builder that can do things like require two Content Managers to give approval before user submitted content goes online</li>
         <li>Selectable workflows for new/edited assets</li>
         <li>Assets create other assets; almost everything is an asset</li>
         <li>Easily, cleanly extensible OO architecture</li>
         <li>Discussion boards, shops, image galleries, ticket trackers, and various other types of interactive content</li>
         <li>Scalable architecture suitable for busy sites</li>
         </ul>
     
      You can find more information about the CMS at:  <a href="https://github.com/AlliumCepa/webgui" rel="noopener noreferrer" target="_blank">WebGUI</a>
      <br />
      <br />
      <h4>This interface was written using the excellent JavaScript library: <a href="https://reactjs.org" rel="noopener noreferrer" target="_blank">React</a></h4>
      <h4>The fantastic component library <a href="https://www.primefaces.org/primereact" rel="noopener noreferrer" target="_blank">PrimeReact</a> can be found
      <a href="https://www.primefaces.org/primereact" rel="noopener noreferrer" target="_blank">here</a></h4>
      </Card>
   );   
}