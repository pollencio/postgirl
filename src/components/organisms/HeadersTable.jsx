import styled from 'styled-components';
import useAppContext from '../../state/useAppContext';
import DynamicTable from '../templates/DynamicTable';

function HeadersTable() {
  const { setRequestHeaders } = useAppContext();

  return (
    <StyledParams>
      <p className="heading">Headers</p>

      <DynamicTable
        buttonText="Add a header"
        onTableChange={setRequestHeaders}
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
