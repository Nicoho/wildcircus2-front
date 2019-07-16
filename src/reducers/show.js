const initialState = {
  loading: false,
  list: {},
  error: '',
};

const show = (state = initialState, action) => {
  switch (action.type) {
    case 'START_SHOW': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'SUCCESS_SHOW': {

      return {
        loading: false,
        list: action.show,
        error: '',
      };
    }
    case 'ERROR_SHOW': {
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    }
    default:

      return state;
  }
};

export default show;