import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Checkbox, Icon, neutral } from '@superys/momo-ui';

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

const NEW_ROW_STATE: RowType = { key: '', value: '', isSelected: true };

function DynamicTable({ onTableChange, ...props }: DynamicTableProps) {
  const [rows, setRows] = useState<RowType[]>([{ ...NEW_ROW_STATE }]);

  const setNewState = useCallback(
    (newRows: RowType[]) => {
      setRows(newRows);
      onTableChange(getStateObject(newRows)); // TODO: last item is always an empty row
    },
    [onTableChange],
  );

  const removeRow = (rowIndex: number) => {
    const newRows = [...rows];
    newRows.splice(rowIndex, 1);
    setNewState(newRows);
    onTableChange(getStateObject(newRows));
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

  // add a row if the last one has been edited
  useEffect(() => {
    const lastRow = rows[rows.length - 1];
    if (lastRow.key !== '' || lastRow.value !== '') {
      const newRows = [...rows];
      newRows.push({ ...NEW_ROW_STATE });
      setNewState(newRows);
    }
  }, [rows, setNewState]);

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
                  {index !== rows.length - 1 && (
                    <Checkbox
                      name="isSelected"
                      checked={row.isSelected}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  )}
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
                {index === rows.length - 1 ? (
                  <td></td>
                ) : (
                  <td onClick={() => removeRow(index)}>
                    <Icon
                      icon="x"
                      weight="bold"
                      size={17}
                      color={neutral[600]}
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
    </>
  );
}

const getStateObject = (stateArray: RowType[]): { [key: string]: string } => {
  return stateArray.reduce((acc, item, index) => {
    if ((index !== stateArray.length - 1 && item.isSelected) === true) {
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
    padding: 8px;
    min-width: 40px;
  }
  th:last-child,
  td:last-child {
    border: none;
    min-width: 27px;
    padding-right: 0;
  }
  th,
  td {
    border: 1px solid ${(props) => props.theme.palette.neutral[700]};
    padding: 10px;
    text-align: left;
  }
  input:not([type='checkbox']) {
    color: ${(props) =>
      props.theme.palette.neutral[100]}; // TODO: remove when fixed on momo-ui
    background: none;
    border: none;
    width: 100%;
    min-width: 22px;
    margin: 0;
  }
`;

export default DynamicTable;
