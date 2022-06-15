import styled from "styled-components";
import useAppContext from "../../../state/useAppContext";
import NoDataMessage from "../../../components/molecules/NoDataMessage";
import DynamicTable from "../../../components/templates/DynamicTable";

function HeadersTable() {
  const { setRequestElement } = useAppContext();

  return (
    <StyledParams>
      <p className="heading">Headers</p>

      <DynamicTable
        tableKey="request-headers"
        buttonText="Add a header"
        onTableChange={(headers) => setRequestElement("headers", headers)}
        noDataMessage={<NoDataMessage icon="align-top-simple" />}
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
