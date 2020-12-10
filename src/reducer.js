const FORM_DATA = 'FORM_DATA';

const INITIAL_STATE = {
  formData: {}
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORM_DATA:
      return { ...state.formData, formData: {...action.formData } };
    default:
      return state;
  }
}

export default reducer;
