import { useState } from 'react';
import styled from 'styled-components';
import { Checkbox, Icon, TertiaryButton } from '@superys/momo-ui';
import FlexContainer from '../atoms/FlexContainer';

type RowType = { key: string; value: string; isSelected: boolean };
type EventTarget = {
  name: string | boolean;
  type: string;
  value?: any;
  checked?: boolean;
};
type DynamicTableProps = {
  heading?: string;
  tableKey: string;
  onTableChange: (tableObj: any) => void;
  buttonText: string;
  noDataMessage?: React.ReactNode;
};

const NEW_ROW_STATE: RowType = { key: '', value: '', isSelected: false };

function DynamicTable(props: DynamicTableProps) {
  const [rows, setRows] = useState<RowType[]>([]);

  const setNewState = (newRows: RowType[]) => {
    setRows(newRows);
    props.onTableChange(getStateObject(newRows));
  };

  const handleInputChange = (
    event: { target: EventTarget },
    rowIndex: number,
  ) => {
    const { name, value, checked, type } = event.target;
    let newRows: RowType[] = [...rows];
    newRows[rowIndex] = {
      ...newRows[rowIndex],
      [name as string]: type === 'checkbox' ? checked : value,
    };
    setNewState(newRows);
  };

  const addRow = () => {
    const newRows = [...rows];
    newRows.push({ ...NEW_ROW_STATE });
    setNewState(newRows);
  };

  const removeRow = (rowIndex: number) => {
    const newRows = [...rows];
    newRows.splice(rowIndex, 1);
    setNewState(newRows);
    props.onTableChange(getStateObject(newRows));
  };

  return (
    <>
      <TableHeading>{props.heading}</TableHeading>

      {rows.length === 0 && props.noDataMessage ? (
        props.noDataMessage
      ) : (
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
            {rows.map((row, index) => (
              <tr key={`${props.tableKey}-table-row-${index}`}>
                <td>
                  <Checkbox
                    name="isSelected"
                    checked={row.isSelected}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                <td>
                  <input
                    name="key"
                    placeholder="key"
                    value={row.key}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                <td>
                  <input
                    name="value"
                    placeholder="value"
                    value={row.value}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </td>
                <td onClick={() => removeRow(index)}>
                  <Icon icon="trash" weight="bold" />
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}

      <FlexContainer justifyContent="center">
        <TertiaryButton modifiers="small" onClick={addRow}>
          {props.buttonText}
        </TertiaryButton>
      </FlexContainer>
    </>
  );
}

const getStateObject = (stateArray: RowType[]) => {
  return stateArray.reduce((acc, item) => {
    if (item.isSelected === true) {
      return {
        ...acc,
        [item.key]: item.value,
      };
    } else {
      return acc;
    }
  }, {});
};

const TableHeading = styled.p`
  color: ${(props) => props.theme.palette.neutral[500]};
  font-weight: bold;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  margin-bottom: 30px;
  width: 100%;

  th {
    color: ${(props) => props.theme.palette.neutral[500]};
  }
  tr {
    height: 40px !important;
  }

  th:first-child,
  td:first-child {
    padding: 8px 9px 8px 8px;
  }
  th:last-child,
  td:last-child {
    border: none;
    min-width: 22px;
  }
  th,
  td {
    border: 1px solid ${(props) => props.theme.palette.neutral[700]};
    padding: 10px;
    text-align: left;
  }
  input {
    background: none;
    border: none;
    width: 100%;
    min-width: 22px;
    margin: 0;
  }
`;

export default DynamicTable;
