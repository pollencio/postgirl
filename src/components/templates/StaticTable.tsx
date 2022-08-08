import styled from 'styled-components';

type StaticTableProps = {
  heading?: string;
  tableKey: string;
  data?: { [key: string]: string };
};

function StaticTable({ heading, tableKey, data }: StaticTableProps) {
  return (
    <div>
      {heading && <TableHeading>{heading}</TableHeading>}

      <StyledTable>
        <thead>
          <tr>
            <th>KEY</th>
            <th>VALUE</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            Object.keys(data).map((key, index) => (
              <tr key={`${tableKey}-table-item-${index}`}>
                <td>{key}</td>
                <td>{data[key]}</td>
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </div>
  );
}

const TableHeading = styled.p`
  color: ${({ theme }) => theme.palette.neutral[500]};
  font-weight: bold;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  margin-bottom: 30px;
  width: 100%;

  th {
    color: ${({ theme }) => theme.palette.neutral[500]};
  }
  tr {
    height: 40px;
  }

  th:first-child,
  td:first-child {
    padding: 7px;
  }
  th,
  td {
    border: 1px solid ${({ theme }) => theme.palette.neutral[700]};
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
