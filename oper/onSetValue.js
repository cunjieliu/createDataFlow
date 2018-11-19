import oper from './oper';

function onSetValue() {
  return oper({
    name: 'onSetValue',
    realTarget: action => action.target,
    do: action => action.data,
  });
}

export default onSetValue;
