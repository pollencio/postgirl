import styled from 'styled-components';
import useAppContext from '../../../state/useAppContext';
import DynamicTable from '../../templates/DynamicTable';

function HeadersTable() {
  const { setRequestElement } = useAppContext();

  return (
    <DynamicTable
      isEditable={false}
      buttonText="Add a header"
      onTableChange={(headers) => setRequestElement('headers', headers)}
    />
  );
}

export default HeadersTable;
