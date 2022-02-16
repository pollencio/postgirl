import { useRef } from 'react';
import styled from 'styled-components';
import { Button, Input } from '@superys/momo-ui';
import useAppContext from '../../state/useAppContext';

function RequestInput() {
  const methodRef = useRef();
  const urlRef = useRef();
  const { setRequestElement, isLoading, sendRequest } = useAppContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    setRequestElement('method', methodRef.current.value);
    setRequestElement('url', urlRef.current.value);
    sendRequest();
  };

  return (
    <RequestInputStyled onSubmit={handleSubmit}>
      <select ref={methodRef}>
        <option value="get">Get</option>
      </select>
      <Input ref={urlRef} type="url" placeholder="Enter request URL" />
      <Button color="pink" type="submit" modifiers="small" loading={isLoading}>
        Send
      </Button>
    </RequestInputStyled>
  );
}

const RequestInputStyled = styled.form`
  position: relative;
  display: flex;
  margin-bottom: 25px;
  button {
    position: absolute;
    right: 5px;
    top: 6px;
  }
  select {
    font-family: NunitoSans, Verdana;
    font-size: 1rem;
    background-color: #ffffff;
    color: #333333;
    padding: 9px 20px 9px 15px;
    border-radius: 30px 0 0 30px;
    border: 2px solid #e0e0e0;
    box-sizing: border-box;
    -webkit-transition: background-color 0.2s linear, color 0.2s linear,
      box-shadow 0.2s linear;
    transition: background-color 0.2s linear, color 0.2s linear,
      box-shadow 0.2s linear;
    &:focus {
      outline: none;
      box-shadow: 2px 2px 15px rgb(68 140 255 / 30%);
      border-color: #8dd6ff;
    }
  }
  label {
    flex-grow: 2;
  }
  input {
    border-radius: 0 30px 30px 0;
    padding-left: 10px;
    padding-right: 75px;
    width: 100%;
  }
`;

export default RequestInput;