import { useContext } from 'react';
import { AppContext } from './AppContext';

function useAppContext() {
  const [state, setState] = useContext(AppContext);

  const setStateElement = (key, value) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  const setRequestElement = (key, value) => {
    setStateElement('request', { ...state.request, [key]: value });
  };

  const sendRequest = async () => {
    console.log(`Attempting to make ${method} request to ${url}`);
    console.log('Request config: ', state.request);
    try {
      setStateElement('isLoading', true);
      // setStateElement('response', await axios(state.request));
      setStateElement('error', null);
    } catch (error) {
      setStateElement('error', error);
    } finally {
      // setStateElement('isLoading', false);
    }
  };

  const cancelRequest = () => console.log('Attempting to cancel request');

  return {
    // get state elements
    request: state.request,
    response: state.response,
    error: state.error,
    isLoading: state.isLoading,

    // set elements
    setRequestElement,

    // request handlers
    sendRequest,
    cancelRequest,
  };
}

export default useAppContext;
