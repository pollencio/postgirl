import { useContext } from 'react';
import axios from 'axios';
import prettyBytes from 'pretty-bytes';
import { AppContext } from './AppContext';
import { StateType, RequestType, ResponseType } from '../types';

function useAppContext() {
  const { state, setState } = useContext(AppContext);
  const { request, response, error, isLoading } = state;
  // console.log('live changes to state!', state);

  const setStateElement = (key: string, value: any) => {
    setState((prevState: StateType) => ({ ...prevState, [key]: value }));
  };

  const setRequestElement = (key: string, value: any) => {
    setStateElement('request', { ...request, [key]: value });
  };

  const sendRequest = () => {
    console.log(
      `Attempting to make ${request.method} request to ${request.url}`,
    );
    setStateElement('isLoading', true);
    setStateElement('error', null);

    axios(request)
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
    request,
    response,
    error,
    isLoading,

    // set elements
    setRequestElement,

    // request handlers
    sendRequest,
    cancelRequest,
  };
}

export default useAppContext;

/*
  HANDLE RESPONSE TIMES WITH AXIOS INTERCEPTORS
*/

axios.interceptors.request.use((request: RequestType) => {
  request.customData = request.customData || {};
  request.customData.startTime = new Date().getTime(); // set the startTime
  return request;
});

axios.interceptors.response.use(updateEndTime, (error) => {
  console.log('INTERCEPTOR ERROR', error);
  return Promise.reject(updateEndTime(error.response)); // set the endTime
});

function updateEndTime(response: ResponseType) {
  response.customData = response.customData || {};
  response.customData.time =
    new Date().getTime() - response.config.customData.startTime;
  return response;
}
