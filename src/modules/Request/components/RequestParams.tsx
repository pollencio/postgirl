import useAppContext from '../../../state/useAppContext';
import Table from '../../../components/templates/Table';

function ParamsTable() {
  const { setRequestElement } = useAppContext();

  return (
    <Table
      heading="Query Params"
      tableKey="request-params"
      buttonText="Add a param"
      onTableChange={(params) => setRequestElement('params', params)}
      isDynamic
    />
  );
}

export default ParamsTable;
