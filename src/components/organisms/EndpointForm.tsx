import { useRef } from 'react';
import styled from 'styled-components';
import { Button, Input } from '@superys/momo-ui';
import { RequestType } from '../../types';

type EndpointFormProps = {
  onSendRequest: (request: RequestType) => void;
  isLoading: boolean;
};

function EndpointForm({ onSendRequest, isLoading }: EndpointFormProps) {
  const methodRef = useRef<HTMLSelectElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSendRequest({
      method: methodRef.current?.value,
      url: urlRef.current?.value,
    });
  };

  return (
    <EndpointFormStyled onSubmit={handleSubmit}>
      <select ref={methodRef}>
        <option value="get">GET</option>
        <option value="post">POST</option>
        <option value="put">PUT</option>
        <option value="patch">PATCH</option>
        <option value="delete">DELETE</option>
      </select>
      <Input ref={urlRef} type="url" placeholder="Enter request URL" />
      <Button type="submit" modifiers="small" loading={isLoading}>
        Send
      </Button>
    </EndpointFormStyled>
  );
}

const EndpointFormStyled = styled.form`
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
    padding: 9px 5px 9px 10px;
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

export default EndpointForm;
