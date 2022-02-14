import useAppContext from './state/useAppContext';
import RequestInput from './components/organisms/RequestInput';
import RequestArea from './components/organisms/RequestArea';
import ResponseArea from './components/organisms/ResponseArea';
import MainLayout from './components/templates/MainLayout';
import TabAreas from './components/templates/TabAreas';

function App() {
  const { sendRequest, isLoading } = useAppContext();

  return (
    <MainLayout>
      <RequestInput onSendRequest={sendRequest} isLoading={isLoading} />
      <TabAreas
        isPrimary={true}
        tabs={['Details', 'Response']}
        areas={[<RequestArea />, <ResponseArea />]}
      />
    </MainLayout>
  );
}

export default App;
