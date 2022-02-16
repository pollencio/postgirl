import useAppContext from '../../../state/useAppContext';
import StaticTable from '../../templates/StaticTable';

function HeadersTable() {
  const {
    response: { headers },
  } = useAppContext();

  return <StaticTable tableKey="response-headers" data={headers} />;
}

export default HeadersTable;
