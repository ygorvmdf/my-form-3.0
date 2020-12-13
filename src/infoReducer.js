const INFO_DATA = 'INFO_DATA';

const INITIAL_STATE = {
  info: {
    name: '',
    email: '',
    cpf: '',
    adress: '',
    city: '',
    state: 'Acre',
    residence: 'Casa',
    curriculum: '',
    jobRole: '',
    jobDescription: '',
  },
}

const infoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INFO_DATA:
      return { ...state, info: {...state.info, ...action.info }};
    default:
      return state;
  }
}

export default infoReducer;
