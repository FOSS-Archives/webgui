export default () => {
   function displayUnavailable(message){
      alert("You did not allow us to figure out your location: " + message);
   }
   
   function evaluateGeoLocationError(geoLocationObject){
      if ( geoLocationObject.PERMISSION_DENIED !== undefined ){
         displayUnavailable(geoLocationObject.PERMISSION_DENIED);
        
      }else{
         console.log(geoLocationObject);
      }
   }
   
   if ("geolocation" in navigator) {
   /* geolocation is available */
      navigator.geolocation.getCurrentPosition( position => console.log(position), err => evaluateGeoLocationError(err) );             
   } else {
   /* geolocation IS NOT available */
      console.log("Geolocation is not available");
   }   
   
};