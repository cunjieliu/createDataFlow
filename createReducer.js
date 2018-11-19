/**
 * 转换传统的redux reducer写法
 * swtich 写法 -> object map写法
 * @param {*} initialState
 * @param {*} reducerObject
 */

function createReducer(initialState, reducerObject) {
  return (state = initialState, action) => {
    if (reducerObject[action.type]) {
      return reducerObject[action.type](state, action);
    }

    return state;
  };
}

export default createReducer;
