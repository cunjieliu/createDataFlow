import Http from '@common/http';
import { actionsCreator } from '@store/helper';

function createThunkAction({
  type,
  target,
  url,
  params,
  namespace,
  method = 'GET',
  successCallback,
  beforeFetchCallback,
  failCallback,
  selector = arg => arg,
}) {
  const actions = actionsCreator(type, namespace, target);
  return (dispatch) => {
    dispatch(actions.loadingAction());
    beforeFetchCallback && beforeFetchCallback();
    const m = method.toLowerCase();
    return Http[m](url, params)
      .then((res) => {
        const r = selector(res);
        dispatch(actions.successAction(r));
        successCallback && successCallback(res);
        return res;
      }).catch((err) => {
        dispatch(actions.failureAction());
        failCallback && failCallback();
        return err;
      });
  };
}

export default createThunkAction;
