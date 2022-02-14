import styled from 'styled-components';
import useAppContext from '../../state/useAppContext';
import DynamicTable from '../templates/DynamicTable';

function ParamsTable() {
  const { setParams } = useAppContext();

  return (
    <StyledParams>
      <p className="heading">Query Params</p>

      <DynamicTable buttonText="Add a param" onTableChange={setParams} />
    </StyledParams>
  );
}

const StyledParams = styled.div`
  .heading {
    font-weight: bold;
  }
`;

export default ParamsTable;
