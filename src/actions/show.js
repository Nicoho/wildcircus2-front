export const startShow = () => ({
  type: 'START_SHOW',
});

export const successShow = (show) => ({
  type: 'SUCCESS_SHOW',
  show
});

export const errorShow = err => ({
  type: 'ERROR_SHOW',
  err,
});

export const changeShowElement = (value, id) => ({
  type: 'CHANGE_SHOW',
  value,
  id,

});

export const getAsyncShow = id => (
  (dispatch) => {
    dispatch(startShow());
    fetch(`http://localhost:3000/performance/${id}`)
      .then(res => res.json())
      .then((show) => {
        dispatch(successShow(show));
      })
      .catch(() => {
        dispatch(errorShow('Erreur lors du chargement du spectacle'));
      });
  }
);