import styled from 'styled-components';

function StaticTable({ tableKey, data }) {
  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <th></th>
            <th>KEY</th>
            <th>VALUE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={`${tableKey}-table-item-${index}`}>
              <td></td>
              <td>{item.key}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
}

const StyledTable = styled.table`
  border-collapse: collapse;
  margin-bottom: 30px;
  width: 100%;

  tr {
    height: 40px;
  }

  th:first-child,
  td:first-child {
    padding: 7px;
  }
  th:last-child,
  td:last-child {
    border: none;
    min-width: 20px;
  }
  th,
  td {
    border: 1px solid ${neutral[500]};
    padding: 10px;
    text-align: left;
  }
  input {
    background: none;
    border: none;
    width: 100%;
    min-width: 20px;
  }
`;

export default StaticTable;
