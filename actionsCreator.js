/**
 * action生成器 => { type: 'ANY_TYPE' }
 * @param {string} type
 * @param {string} scope
 * @param {boolean} withStatus
 */

function actionsCreator(type, scope, target = '', withStatus = true) {
  if (withStatus) {
    return {
      loadingAction: () => ({
        type: `@${scope}/${type}_LOADING`,
        scope,
        target,
      }),
      successAction: res => ({
        type: `@${scope}/${type}_SUCCESS`,
        data: res,
        scope,
        target,
      }),
      failureAction: () => ({
        type: `@${scope}/${type}_FAILURE`,
        scope,
        target,
      }),
    };
  }

  return arg => ({
    type: `@${scope}/${type}`,
    data: arg,
    scope,
    target,
  });
}

export default actionsCreator;

