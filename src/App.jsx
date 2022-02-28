import { useState } from 'react';
import useAppContext from './state/useAppContext';
import RequestInput from './components/organisms/RequestInput';
import RequestArea from './components/organisms/RequestArea/Request';
import ResponseArea from './components/organisms/ResponseArea/Response';
import MainLayout from './components/templates/MainLayout';
import TabAreas from './components/templates/TabAreas';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { sendRequest, setRequestElement, isLoading } = useAppContext();

  const onSendRequest = ({ method, url }) => {
    console.log('METHOD', method);
    setRequestElement('method', method);
    setRequestElement('url', url);
    sendRequest();

    setSelectedIndex(1); // auto-select Response tab when hitting send
  };

  return (
    <MainLayout>
      <RequestInput onSendRequest={onSendRequest} isLoading={isLoading} />
      <TabAreas
        isPrimary={true}
        tabs={['Details', 'Response']}
        areas={[<RequestArea />, <ResponseArea />]}
        selectedIndex={selectedIndex}
      />
    </MainLayout>
  );
}

export default App;
