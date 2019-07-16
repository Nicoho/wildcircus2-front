const initialState = {
  loading: false,
  list: [],
  error: '',
};

const shows = (state = initialState, action) => {
  switch (action.type) {
    case 'START_SHOWS': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'SUCCESS_SHOWS': {
      return {
        loading: false,
        list: [...action.shows],
        error: '',
      };
    }
    case 'ERROR_SHOWS': {
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

export default shows;