export function errors(erros = null, action){
  switch (action.type) {
    case 'error':
      return action.login;
    default:
      return erros;
  }

}