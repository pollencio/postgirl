import useAppContext from '../../../state/useAppContext';
import Table from '../../../components/templates/Table';

function HeadersTable() {
  const { setRequestElement } = useAppContext();

  return (
    <Table
      heading="Headers"
      tableKey="request-headers"
      buttonText="Add a header"
      onTableChange={(headers) => setRequestElement('headers', headers)}
      isDynamic
    />
  );
}

export default HeadersTable;
