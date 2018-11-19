// import mergeState from './mergeState';

function onSuccess() {
  // return (state, action) =>
  //   mergeState(state, {
  //     [`${action.target}Loading`]: false,
  //     [`${action.target}Error`]: null,
  //     [`${action.target}`]: action.data,
  //   });

  return (state, action) => {
    const mergeState = {
      ...state,
      [`${action.target}Loading`]: false,
      [`${action.target}Error`]: null,
      [`${action.target}`]: action.data,
    };
    return mergeState;
  };
}

export default onSuccess;
