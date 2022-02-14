import ParamsTable from './ParamsTable';
import HeadersTable from './HeadersTable';
import TabAreas from '../templates/TabAreas';
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
      areas={[<ParamsTable />, <HeadersTable />, 'Body']}
    />
  );
}

export default RequestArea;
