export function errors(username) {
   return {
      type: 'error',
      login: username
   };
}
