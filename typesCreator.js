import createActionTypes from './createActionTypes';
import completeTypes from './completeTypes';

const typeCreator = (types, ignoredtypes, scope) => {
  return createActionTypes(completeTypes(types, ignoredtypes), scope);
};

export default typeCreator;
