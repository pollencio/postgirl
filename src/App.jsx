import { Button, Icon, Input } from '@superys/momo-ui';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import MainLayout from './templates/MainLayout';
import axios from 'axios';

function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendRequest = async ({ url, method }) => {
    console.log(`Trying to make ${method} request to ${url}`);
    try {
      setLoading(true);
      const axiosResponse = await axios({
        url,
        method,
      });
      console.log(axiosResponse);
      setResponse(axiosResponse);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <RequestInput onSendRequest={sendRequest} isLoading={loading} />
      {response ? (
        <code>{JSON.stringify(response)}</code>
      ) : error ? (
        <code>{error}</code>
      ) : (
        <NoResponseMessage />
      )}
    </MainLayout>
  );
}

function RequestInput({ onSendRequest, isLoading }) {
  const methodRef = useRef();
  const urlRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSendRequest({
      method: methodRef.current.value,
      url: urlRef.current.value,
    });
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
  button {
    position: absolute;
    right: 5px;
    top: 6px;
  }
  select {
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
    padding-right: 75px;
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
  margin: 40% auto;
  opacity: 50%;
`;

export default App;
