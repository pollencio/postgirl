import styled from 'styled-components';
import useAppContext from '../../../state/useAppContext';
import DynamicTable from '../../templates/DynamicTable';

function HeadersTable() {
  const { setRequestElement } = useAppContext();

  return (
    <StyledParams>
      <p className="heading">Headers</p>

      <DynamicTable
        tableKey="request-headers"
        buttonText="Add a header"
        onTableChange={(headers) => setRequestElement('headers', headers)}
      />
    </StyledParams>
  );
}

const StyledParams = styled.div`
  .heading {
    font-weight: bold;
  }
`;

export default HeadersTable;
