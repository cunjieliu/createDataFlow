import oper from './oper';

function onLoading(condition = () => true) {
  return oper({
    name: 'onLoading',
    realTarget: action => `${action.target}Loading`,
    do: condition,
  });
}

export default onLoading;
