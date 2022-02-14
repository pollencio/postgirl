import { useContext, useState } from 'react';
import styled from 'styled-components';
import { Checkbox, Icon, neutral, TertiaryButton } from '@superys/momo-ui';
import { RequestContext } from '../../state/request';

const NEW_PARAM_STATE = { key: '', value: '', isSelected: false };

function ParamsTable() {
  const [, setRequest] = useContext(RequestContext);
  const [params, setParams] = useState([{ ...NEW_PARAM_STATE }]);

  const handleInputChange = (event, paramIndex) => {
    const { name, value, checked, type } = event.target;
    let newParams = [...params];
    newParams[paramIndex][name] = type === 'checkbox' ? checked : value;
    setParams(newParams);
    setRequest((prevState) => ({
      ...prevState,
      params: getParamsObject(newParams),
    }));
  };

  const addParam = () => {
    const newParams = [...params];
    newParams.push({ ...NEW_PARAM_STATE });
    setParams(newParams);
  };

  const removeParam = (paramIndex) => {
    const newParams = [...params];
    newParams.splice(paramIndex, 1);
    setParams(newParams);
  };

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
          {params.map((param, index) => (
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
