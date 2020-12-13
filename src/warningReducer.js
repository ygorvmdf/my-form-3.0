const WARNING_ALERT = 'WARNING_ALERT';

const INITIAL_STATE = {
  showAlert: true,
}

const warningAlert = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WARNING_ALERT:
      return {...state, showAlert: action.showAlert};
    default:
      return state;
    }
  }

export default warningAlert;
