/* const state = {
   name: 'Anderson',
   logged:true 
} */

const authReducer = (state = {}, action) => {
  const actions = {
    login: { ...action.payload, logged: true },
    logout: { logged: false },
  };

  state = actions[action.type] ?? state;

  return state;
};

export { authReducer };
