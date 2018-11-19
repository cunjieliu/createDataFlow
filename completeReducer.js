import onLoading from './oper/onLoading';
import onSetValue from './oper/onSetValue';
import onSuccess from './oper/onSuccess';
import onFailure from './oper/onFailure';

function completeReducer(reducerDescription) {
  if (
    !reducerDescription ||
    ((!reducerDescription.primaryActions || !reducerDescription.primaryActions.length) &&
    (!reducerDescription.settingActions || !reducerDescription.settingActions.length)) &&
    !reducerDescription.namespace
  ) {
    throw new Error('Reducer description is error');
  }

  let reducerHandler = {};

  const { namespace, primaryActions, settingActions, override } = reducerDescription;

  if (primaryActions) {
    primaryActions.forEach((actionName) => {
      reducerHandler[`@${namespace}/${actionName}_LOADING`] = onLoading();
      reducerHandler[`@${namespace}/${actionName}_SUCCESS`] = onSuccess();
      reducerHandler[`@${namespace}/${actionName}_FAILURE`] = onFailure();
    });
  }

  if (settingActions) {
    settingActions.forEach((actionName) => {
      reducerHandler[`@${namespace}/${actionName}`] = onSetValue();
    });
  }

  if (override) {
    reducerHandler = { ...reducerHandler, ...override };
  }
  return reducerHandler;
}

export default completeReducer;
