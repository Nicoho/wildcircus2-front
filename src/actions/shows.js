export const startShows = () => ({
  type: 'START_SHOWS',
});

export const successShows = (shows) => ({
  type: 'SUCCESS_SHOWS',
  shows
});

export const errorShows = err => ({
  type: 'ERROR_SHOWS',
  err,
});

export const getAsyncShows = () => (
  (dispatch) => {
    dispatch(startShows());
    fetch(`http://localhost:3000/performance/`)
      .then(res => res.json())
      .then((shows) => {
        dispatch(successShows(shows));
      })
      .catch(() => {
        dispatch(errorShows('Erreur lors du chargement des spectacles'));
      });
  }
);