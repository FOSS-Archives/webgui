export default epoc => {
   let datetime = new Date(parseInt(epoc, 10));
   let year    = String(datetime.getFullYear());
   let month   = String(datetime.getMonth() + 1); // (0-11)
   let day     = String(datetime.getDate());
   let hour    = String(datetime.getHours());
   let minute  = String(datetime.getMinutes());
   let second  = String(datetime.getSeconds());
   return year + '/' + month.padStart(2,'0') + '/' + day.padStart(2,'0') + ' ' +
      hour.padStart(2,'0') + ':' + minute.padStart(2,'0') + ':' + second.padStart(2,'0');
}