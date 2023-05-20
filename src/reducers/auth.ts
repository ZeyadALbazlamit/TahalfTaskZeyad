/**
 * @prettier
 */


 const INITIAL_STATE = {
    id:null
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      // get data cases.
      case 'LOGIN':
        return { id:action.payload};

        default:
            return state;
    }
    
  };