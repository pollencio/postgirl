import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { defaultTheme } from '@superys/momo-ui';

import NoResponseMessage from './molecules/NoResponseMessage';
import RequestInput from './organisms/RequestInput';
import MainLayout from './templates/MainLayout';

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
      <PrimaryTabAreas
        tabs={['Details', 'Response']}
        areas={[
          <RequestArea />,
          <ResponseArea response={response} error={error} />,
        ]}
      />
    </MainLayout>
  );
}

function PrimaryTabAreas({ tabs, areas }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <StyledPrimaryTabAreas>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <h5
            key={`primary-tab-${index}`}
            className="subtitle"
            data-selected={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
          >
            {tab}
          </h5>
        ))}
      </div>
      <div className="areas">
        {areas.map((area, index) => (
          <div
            key={`primary-area-${index}`}
            data-selected={selectedIndex === index}
          >
            {area}
          </div>
        ))}
      </div>
    </StyledPrimaryTabAreas>
  );
}

const StyledPrimaryTabAreas = styled.div`
  .tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    & > * {
      text-align: center;
      padding: 8px 0;
      width: 100px;
    }
    & > *[data-selected='true'] {
      border-bottom: 2px solid ${defaultTheme.textColor};
    }
  }
  .areas > * {
    display: none;
    &[data-selected='true'] {
      display: block;
    }
  }
`;

function RequestArea() {
  return <>Holi</>;
}

function ResponseArea({ response, error }) {
  if (!response && !error) {
    return <NoResponseMessage />;
  }
  return (
    <>
      {error ? (
        <code>{error}</code>
      ) : (
        <code>{JSON.stringify(response.data)}</code>
      )}
    </>
  );
}

export default App;
