import { useState } from 'react';
import styled from 'styled-components';
import { Checkbox, Icon, neutral, TertiaryButton } from '@superys/momo-ui';

const NEW_ROW_STATE = { key: '', value: '', isSelected: true };

function DynamicTable({ onTableChange, buttonText }) {
  const [state, setState] = useState([]);

  const setNewState = (newState) => {
    setState(newState);
    onTableChange(getStateObject(newState));
  };

  const handleInputChange = (event, rowIndex) => {
    const { name, value, checked, type } = event.target;
    let newState = [...state];
    newState[rowIndex][name] = type === 'checkbox' ? checked : value;
    setNewState(newState);
  };

  const addRow = () => {
    const newState = [...state];
    newState.push({ ...NEW_ROW_STATE });
    setNewState(newState);
  };

  const removeRow = (rowIndex) => {
    const newState = [...state];
    newState.splice(rowIndex, 1);
    setNewState(newState);
    onTableChange(getStateObject(newState));
  };

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
          {state.map((param, index) => (
            <tr key={`param-${index}`}>
              <td>
                <Checkbox
                  name="isSelected"
                  checked={param.isSelected}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </td>
              <td>
                <input
                  name="key"
                  placeholder="key"
                  value={param.key}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </td>
              <td>
                <input
                  name="value"
                  placeholder="value"
                  value={param.value}
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

      <center>
        <TertiaryButton modifiers="small" onClick={addRow}>
          {buttonText}
        </TertiaryButton>
      </center>
    </div>
  );
}

const getStateObject = (stateArray) => {
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
