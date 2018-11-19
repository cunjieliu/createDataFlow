/**
 * 简易生成带namespace（scope）的actiontypes工具函数
 * @param {*} actions
 * @param {*} namespace
 */

import _forEach from 'lodash/forEach';

// const rootActions = {};

function createActionTypes(actions, namespace) {
  if (!namespace) {
    console.error('No namespace provided while creating action types');
    // return {};
  }

  // if (!rootActions[namespace]) {
  //   rootActions[namespace] = {};
  // }

  // const thisNamespaceActions = rootActions[namespace];
  // _forEach(actions, (action) => {
  //   thisNamespaceActions[action] = namespace ? `${namespace}_${action}` : action;
  // });

  // return thisNamespaceActions;

  const result = {};
  _forEach(actions, (action) => {
    result[action] = namespace ? `@${namespace}/${action}` : action;
  });
  return result;
}

export default createActionTypes;
