import { useState } from 'react';
import axios from 'axios';
import useAppContext from './state/useAppContext';

import RequestInput from './components/organisms/RequestInput';
import RequestArea from './components/organisms/RequestArea';
import ResponseArea from './components/organisms/ResponseArea';
import MainLayout from './components/templates/MainLayout';
import TabAreas from './components/templates/TabAreas';

function App() {
  const { request, response, setResponse } = useAppContext();
  const [loading, setLoading] = useState(false);

  console.log('params', request.params);
  // console.log('response', response);
  // console.log('error', error);

  const sendRequest = async ({ url, method, params }) => {
    console.log(`Trying to make ${method} request to ${url}`);
    try {
      setLoading(true);
      const axiosResponse = await axios({ url, method });
      setResponse(axiosResponse);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <RequestInput onSendRequest={sendRequest} isLoading={loading} />
      <TabAreas
        isPrimary={true}
        tabs={['Details', 'Response']}
        areas={[
          <RequestArea />,
          <ResponseArea response={response} error={response.error} />,
        ]}
      />
    </MainLayout>
  );
}

export default App;
