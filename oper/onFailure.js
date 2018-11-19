// import mergeState from './mergeState';

function onFailure() {
  // return (state, action) => {
  //   return mergeState(state, {
  //     [`${action.target}Error`]: true,
  //     [`${action.target}Loading`]: false,
  //     [action.target]: [],
  //   });
  // };
  return (state, action) => {
    const mergeState = {
      ...state,
      [`${action.target}Error`]: true,
      [`${action.target}Loading`]: false,
      [action.target]: [],
    };
    return mergeState;
  };
}

export default onFailure;
