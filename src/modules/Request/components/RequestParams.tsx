import useAppContext from '../../../state/useAppContext';
import DynamicTable from '../../../components/templates/DynamicTable';

function ParamsTable() {
  const { setRequestElement } = useAppContext();

  return (
    <DynamicTable
      heading="Query Params"
      tableKey="request-params"
      buttonText="Add a param"
      onTableChange={(params) => setRequestElement('params', params)}
    />
  );
}

export default ParamsTable;
