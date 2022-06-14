import { useContext } from 'react';
import axios from 'axios';
import prettyBytes from 'pretty-bytes';
import { AppContext } from './AppContext';

// set the startTime
axios.interceptors.request.use((request) => {
  request.customData = request.customData || {};
  request.customData.startTime = new Date().getTime();
  return request;
});

// set the endTime
axios.interceptors.response.use(updateEndTime, (error) => {
  console.log('INTERCEPTOR ERROR', error);
  return Promise.reject(updateEndTime(error.response));
});

function updateEndTime(response) {
  response.customData = response.customData || {};
  response.customData.time =
    new Date().getTime() - response.config.customData.startTime;
  return response;
}

function useAppContext() {
  const [state, setState] = useContext(AppContext);
  console.log('live changes to state!', state);

  const setStateElement = (key, value) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  const setRequestElement = (key, value) => {
    setStateElement('request', { ...state.request, [key]: value });
  };

  const sendRequest = () => {
    console.log(
      `Attempting to make ${state.request.method} request to ${state.request.url}`,
    );
    setStateElement('isLoading', true);
    setStateElement('error', null);

    axios(state.request)
      .catch((error) => {
        setStateElement('isLoading', false);
        return error;
      })
      .then((response) => {
        setStateElement('response', {
          ...response,
          time: response.customData.time,
          size: prettyBytes(
            JSON.stringify(response.data).length +
              JSON.stringify(response.headers).length,
          ),
        });
        setStateElement('isLoading', false);
      });
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
