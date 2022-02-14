import { useState } from 'react';
import styled from 'styled-components';
import { Checkbox, Icon, neutral, TertiaryButton } from '@superys/momo-ui';
import useAppContext from '../../state/useAppContext';

const NEW_PARAM_STATE = { key: '', value: '', isSelected: true };

function ParamsTable() {
  const { setParams } = useAppContext();
  const [paramsArray, setParamsArray] = useState([]);

  const handleInputChange = (event, paramIndex) => {
    const { name, value, checked, type } = event.target;
    let newParams = [...paramsArray];
    newParams[paramIndex][name] = type === 'checkbox' ? checked : value;

    setParamsArray(newParams);
    setParams(getParamsObject(paramsArray));
  };

  const addParam = () => {
    const newParams = [...paramsArray];
    newParams.push({ ...NEW_PARAM_STATE });
    setParamsArray(newParams);
  };

  const removeParam = (paramIndex) => {
    const newParams = [...paramsArray];
    newParams.splice(paramIndex, 1);
    setParamsArray(newParams);
  };

  return (
    <StyledParams>
      <p className="heading">Query Params</p>

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
          {paramsArray.map((param, index) => (
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
              <td onClick={() => removeParam(index)}>
                <Icon icon="trash" weight="bold" />
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <center>
        <TertiaryButton modifiers="small" onClick={addParam}>
          Add a param
        </TertiaryButton>
      </center>
    </StyledParams>
  );
}

const getParamsObject = (paramsArray) => {
  return paramsArray.reduce((acc, item) => {
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

const StyledParams = styled.div`
  .heading {
    font-weight: bold;
  }
`;

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

export default ParamsTable;
