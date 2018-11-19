import { mergeState } from './mergeState';

function oper(effect) {
  return (state, action) => {
    return mergeState(state, { [effect.realTarget(action)]: effect.do(action, state) });
  };
}

export default oper;
