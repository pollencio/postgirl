import { useState } from 'react';
import axios from 'axios';

import RequestInput from './organisms/RequestInput';
import RequestArea from './organisms/RequestArea';
import ResponseArea from './organisms/ResponseArea';
import MainLayout from './templates/MainLayout';
import TabAreas from './templates/TabAreas';

function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendRequest = async ({ url, method }) => {
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

  console.log('response', response);
  console.log('error', error);

  return (
    <MainLayout>
      <RequestInput onSendRequest={sendRequest} isLoading={loading} />
      <TabAreas
        isPrimary={true}
        tabs={['Details', 'Response']}
        areas={[
          <RequestArea />,
          <ResponseArea response={response} error={error} />,
        ]}
      />
    </MainLayout>
  );
}

export default App;
