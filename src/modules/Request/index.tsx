import RequestParams from './components/RequestParams';
import RequestHeaders from './components/RequestHeaders';
import RequestBody from './components/RequestBody';
import TabAreas from '../../components/templates/TabAreas';
import useAppContext from '../../state/useAppContext';

function RequestArea() {
  const {
    request: { headers },
  } = useAppContext();
  const headersNumber = Object.keys(headers || {}).length;

  return (
    <TabAreas
      tabs={[`Params`, 'Body', `Headers (${headersNumber})`]}
      areas={[<RequestParams />, <RequestBody />, <RequestHeaders />]}
    />
  );
}

export default RequestArea;
