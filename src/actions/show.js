export const startShows = () => ({
  type: 'START_SHOWS',
});

export const SuccessShows = (shows) => ({
  type: 'SUCCESS_SHOWS',
  shows
});

export const ErrorShows = err => ({
  type: 'ERROR_SHOWS',
  err,
});

export const getAsyncShows = () => (
  (dispatch) => {
    dispatch(startShows());
    fetch('http://localhost:3000/performance')
      .then(res => res.json())
      .then((shows) => {
        dispatch(SuccessShows(shows));
      })
      .catch(() => {
        dispatch(ErrorShows('Erreur lors du chargement des spectacles'));
      });
  }
);