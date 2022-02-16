import styled from 'styled-components';
import useAppContext from '../../../state/useAppContext';
import DynamicTable from '../../templates/DynamicTable';

function ParamsTable() {
  const { setRequestElement } = useAppContext();

  return (
    <StyledParams>
      <p className="heading">Query Params</p>

      <DynamicTable
        tableKey="request-params"
        buttonText="Add a param"
        onTableChange={(params) => setRequestElement('params', params)}
      />
    </StyledParams>
  );
}

const StyledParams = styled.div`
  .heading {
    font-weight: bold;
  }
`;

export default ParamsTable;
