import { Button, Icon, Input } from '@superys/momo-ui';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import MainLayout from './templates/MainLayout';

function App() {
  const [response, setResponse] = useState(null);

  const onSendRequest = ({ url, type }) => {
    console.log(`Trying to make ${type} request to ${url}`);
  };

  return (
    <MainLayout>
      <RequestInput onSendRequest={onSendRequest} />
      {response ? <h1>Holi</h1> : <NoResponseMessage />}
    </MainLayout>
  );
}

function RequestInput({ onSendRequest }) {
  const typeRef = useRef();
  const urlRef = useRef();

  return (
    <RequestInputStyled onSend={onSendRequest}>
      <select ref={typeRef} className="type-input">
        <option value="get">Get</option>
      </select>
      <Input ref={urlRef} placeholder="Enter request URL" />
      <Button color="pink" type="submit" modifiers="small">
        Send
      </Button>
    </RequestInputStyled>
  );
}

const RequestInputStyled = styled.form`
  position: relative;
  display: flex;
  button {
    position: absolute;
    right: 5px;
    top: 6px;
  }
  .type-input {
    font-family: NunitoSans,Verdana;
    font-size: 1rem;
    background-color: #FFFFFF;
    color: #333333;
    padding: 9px 20px 9px 15px;
    border-radius: 30px 0 0 30px;
    border: 2px solid #E0E0E0;
    box-sizing: border-box;
    -webkit-transition: background-color 0.2s linear,color 0.2s linear, box-shadow 0.2s linear;
    transition: background-color 0.2s linear,color 0.2s linear, box-shadow 0.2s linear;
    &:focus {
      outline: none;
      box-shadow: 2px 2px 15px rgb(68 140 255 / 30%);
      border-color: #8DD6FF;
    }
  }
  label {
    flex-grow: 2;
  }
  input {
    border-radius: 0 30px 30px 0;
    padding-left: 10px;
    width: 100%;
  }
}`;

function NoResponseMessage() {
  return (
    <NoResponseStyled>
      <h4 className="subtitle">Enter a URL and click send to get a response</h4>
      <Icon icon="butterfly" size={110} />
    </NoResponseStyled>
  );
}

const NoResponseStyled = styled.div`
  text-align: center;
  width: 90%;
  max-width: 270px;
  margin: 30% auto;
`;

export default App;
