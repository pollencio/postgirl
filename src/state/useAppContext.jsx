import { useContext } from 'react';
import { AppContext } from './AppContext';

const useAppContext = () => {
  const [state, setState] = useContext(AppContext);

  function setRequestElement(key, value) {
    setState((prevState) => ({
      ...prevState,
      request: { ...state.request, [key]: value },
    }));
  }

  function setRequestParams(params) {
    setRequestElement('params', params);
  }

  function setRequestHeaders(headers) {
    setRequestElement('headers', headers);
  }

  return {
    request: state.request,
    response: state.response,
    setRequestParams,
    setRequestHeaders,
  };
};

export default useAppContext;
