import { useContext } from 'react';
import axios from 'axios';
import { AppContext } from './AppContext';

function useAppContext() {
  const [state, setState] = useContext(AppContext);
  console.log('live changes to state!', state);

  const setStateElement = (key, value) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  const setRequestElement = (key, value) => {
    setStateElement('request', { ...state.request, [key]: value });
  };

  const sendRequest = async () => {
    console.log(
      `Attempting to make ${state.request.method} request to ${state.request.url}`,
    );
    try {
      setStateElement('isLoading', true);
      setStateElement('error', null);
      setStateElement('response', await axios(state.request));
    } catch (error) {
      setStateElement('error', error);
    } finally {
      setStateElement('isLoading', false);
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
