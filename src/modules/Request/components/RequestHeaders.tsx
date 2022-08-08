import useAppContext from '../../../state/useAppContext';
import DynamicTable from '../../../components/templates/DynamicTable';

function HeadersTable() {
  const { setRequestElement } = useAppContext();

  return (
    <DynamicTable
      heading="Headers"
      tableKey="request-headers"
      buttonText="Add a header"
      onTableChange={(headers) => setRequestElement('headers', headers)}
    />
  );
}

export default HeadersTable;
