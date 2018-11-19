import splitCamelCaseToUpperCase from './splitCamelCaseToUpperCase';
import typesCreator from './typesCreator';
import actionsCreator from './actionsCreator';
import createThunkAction from './createThunkAction';
import completeState from './completeState';
import completeReducer from './completeReducer';
import createReducer from './createReducer';

function createDataFlow(config) {
  const { namespace, setting = [], effects = [] } = config;
  // console.log({ namespace, setting, effects });

  const actions = {};
  let reducer = () => {};

  const actionKeysMap = {};

  // 生成actionTypes
  const settingType = setting.map((item) => {
    const capital = splitCamelCaseToUpperCase(item);
    actionKeysMap[capital] = item;
    return capital;
  });

  const effectsType = Object.keys(effects).map((item) => {
    const capital = splitCamelCaseToUpperCase(item);
    actionKeysMap[capital] = item;
    return capital;
  });

  // const actionTypes = typesCreator(effectsType, settingType, namespace);
  // console.log({ actionTypes });

  // 生成actions
  settingType.forEach((item) => {
    actions[actionKeysMap[item]] = (arg) => {
      return actionsCreator(item, namespace, actionKeysMap[item], false)(arg);
    };
  });

  effectsType.forEach((item) => {
    const options = {
      ...effects[actionKeysMap[item]](),
      namespace,
      type: item,
      target: actionKeysMap[item],
    };
    actions[actionKeysMap[item]] = (arg) => {
      options.params = arg;
      return createThunkAction(options);
    };
  });
  // console.log({ actions });

  // 生成initialState
  const generateObj = (data) => {
    const r = {};
    data.forEach((key) => {
      r[key] = null;
    });
    return r;
  };

  const stateWithStatus = generateObj(Object.keys(effects));
  const stateWithoutStatus = generateObj(setting);
  const initialState = completeState(stateWithStatus, stateWithoutStatus);
  // console.log({ initialState });

  // 生成redcuer
  const reducerDescription = {
    primaryActions: effectsType,
    settingActions: settingType,
    namespace,
  };

  reducer = completeReducer(reducerDescription);
  // console.log({ reducer });
  reducer = createReducer(initialState, reducer);
  // console.log({ reducer });

  return {
    ...actions,
    reducer,
  };
}

export default createDataFlow;
