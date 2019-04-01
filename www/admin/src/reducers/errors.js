export function errors(previousState = null, action){
  switch (action.type) {
    case 'error':
      return action.login;
    default:
      return previousState;
  }

}