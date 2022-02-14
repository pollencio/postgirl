import { useContext } from 'react';
import { AppContext } from './AppContext';

const useAppContext = () => {
  const [state, setState] = useContext(AppContext);

  function setParams(params) {
    setState((prevState) => ({
      ...prevState,
      request: { ...state.request, params },
    }));
  }

  return {
    request: state.request,
    response: state.response,
    setParams,
  };
};

export default useAppContext;
