import { useContext, useState } from 'react';
import axios from 'axios';
import { RequestContext } from './state/request';

import RequestInput from './components/organisms/RequestInput';
import RequestArea from './components/organisms/RequestArea';
import ResponseArea from './components/organisms/ResponseArea';
import MainLayout from './components/templates/MainLayout';
import TabAreas from './components/templates/TabAreas';

function App() {
  const [request] = useContext(RequestContext);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(request.params);

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

  // console.log('response', response);
  // console.log('error', error);

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
