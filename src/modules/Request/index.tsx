import RequestParams from './components/RequestParams';
import RequestHeaders from './components/RequestHeaders';
import RequestBody from './components/RequestBody';
import TabAreas from '../../components/templates/TabAreas';
import useAppContext from '../../state/useAppContext';

function RequestArea() {
  const {
    request: { params, headers },
  } = useAppContext();
  const paramsNumber = Object.keys(params || {}).length;
  const headersNumber = Object.keys(headers || {}).length;

  return (
    <TabAreas
      tabs={[`Params (${paramsNumber})`, `Headers (${headersNumber})`, 'Body']}
      areas={[<RequestParams />, <RequestHeaders />, <RequestBody />]}
    />
  );
}

export default RequestArea;
