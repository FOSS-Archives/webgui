import React from 'react';


export default props => {
   let width=100;
   let height=100;
      
   return (
      <img src={props.src} alt={props.altText} width={props.width} height={props.height} />
   );
      
};