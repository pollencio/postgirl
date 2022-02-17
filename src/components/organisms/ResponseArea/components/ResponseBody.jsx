import styled from 'styled-components';
import useAppContext from '../../../../state/useAppContext';

function Body() {
  const { response, error } = useAppContext();

  return (
    <>
      {error ? (
        <code>{error.message}</code>
      ) : (
        <code>{JSON.stringify(response.data)}</code>
      )}
    </>
  );
}

export default Body;
