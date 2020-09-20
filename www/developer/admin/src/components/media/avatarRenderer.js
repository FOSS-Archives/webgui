import React from 'react';


export default props => {
   return (
      <img src={props.src} alt={props.altText} width={props.width} height={props.height} />
   );
      
};