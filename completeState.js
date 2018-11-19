/**
 * 自动生成一定格式的state工具
 * @param {*} defaultState
 * @param {*} ignoredTargets
 */
// function completeState(defaultState, ignoredTargets = []) {
//   const completedState = { ...defaultState };
//   Object.keys(defaultState)
//     .filter(key => ignoredTargets.indexOf(key) === -1)
//     .forEach((key) => {
//       completedState[`${key}Loading`] = false;
//       completedState[`${key}Error`] = null;
//     });
//   return completedState;
// }

// completeState.sel = () => {
//   console.log('completeState.sel');
// };

// completeState.status = () => {
//   console.log('completeState.status');
// };

// completeState.data = () => {
//   console.log('completeState.data');
// };

function completeState(defaultState, ignoredState = {}) {
  const completedState = { ...defaultState, ...ignoredState };
  Object.keys(defaultState)
    .forEach((key) => {
      completedState[`${key}Loading`] = false;
      completedState[`${key}Error`] = null;
    });
  return completedState;
}

export default completeState;

