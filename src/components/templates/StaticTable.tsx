import styled from 'styled-components';
import { neutral } from '@superys/momo-ui';

type StaticTableProps = {
  tableKey: string;
  data?: { [key: string]: string };
};

function StaticTable({ tableKey, data }: StaticTableProps) {
  return (
    <div>
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
