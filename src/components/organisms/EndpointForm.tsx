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
        <option value="get">Get</option>
        <option value="post">Post</option>
        <option value="put">Put</option>
        <option value="patch">Patch</option>
        <option value="delete">Delete</option>
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
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 40px 25px 40px;
  }
  button {
    position: absolute;
    right: 6px;
    top: 6px;
  }
  select {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.typeScale.mobile.paragraph};
    background-color: ${({ theme }) => theme.input.backgroundColor.main};
    color: ${({ theme }) => theme.textColor.main};
    /* font-weight: bold; */
    margin-right: 2px;

    padding: 9px 5px 9px 10px;
    border-radius: 30px 0 0 30px;
    border: 2px solid ${({ theme }) => theme.input.borderColor.main};
    box-sizing: border-box;
    transition: background-color 0.2s linear, color 0.2s linear,
      box-shadow 0.2s linear;
    ::placeholder {
      color: ${({ theme }) => theme.input.placeholderColor};
    }
    &:focus {
      outline: none;
      box-shadow: 2px 2px 15px ${({ theme }) => theme.input.focusShadowColor};
      border-color: ${({ theme }) => theme.input.borderColor.focus};
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
