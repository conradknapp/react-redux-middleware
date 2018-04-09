export default ({ dispatch }) => {
  return next => async action => {
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    let response = await action.payload;
    dispatch({ ...action, payload: response.data });
  };
};
