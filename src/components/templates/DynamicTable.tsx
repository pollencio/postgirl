import { useState } from "react";
import styled from "styled-components";
import { Checkbox, Icon, neutral, TertiaryButton } from "@superys/momo-ui";
import { StringLiteralTypeAnnotation } from "@babel/types";

type RowType = { key: string; value: string; isSelected: boolean };
type EventTarget = {
  name: string | boolean;
  type: string;
  value?: any;
  checked?: boolean;
};
type DynamicTableProps = {
  tableKey: string;
  onTableChange: (tableObj: any) => void;
  buttonText: string;
  noDataMessage: React.ReactNode;
};

const NEW_ROW_STATE: RowType = { key: "", value: "", isSelected: true };

function DynamicTable(props: DynamicTableProps) {
  const [rows, setRows] = useState<RowType[]>([]);

  const setNewState = (newRows: RowType[]) => {
    setRows(newRows);
    props.onTableChange(getStateObject(newRows));
  };

  const handleInputChange = (
    event: { target: EventTarget },
    rowIndex: number
  ) => {
    const { name, value, checked, type } = event.target;
    let newRows: RowType[] = [...rows];
    newRows[rowIndex] = {
      ...newRows[rowIndex],
      [name as string]: type === "checkbox" ? checked : value,
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
      {rows.length === 0 ? (
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

      <TertiaryButton modifiers="small" onClick={addRow}>
        {props.buttonText}
      </TertiaryButton>
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

export default DynamicTable;
