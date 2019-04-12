const saveToLocalStorage = state => {
   try {
      localStorage.setItem('kestrel-state', JSON.stringify(state));
   } catch(e){
      console.log(e);
   }
};

const loadFromLocalStorage = () => {
   try{
      const serializedState = localStorage.getItem('kestrel-state');
      return serializedState === null ? undefined : JSON.parse(serializedState);
   }catch(e){
      console.log(e);
      return undefined;
   }
   
};

export { saveToLocalStorage, loadFromLocalStorage };