import useAppContext from '../../state/useAppContext';
import NoResponseMessage from '../molecules/NoResponseMessage';

function ResponseArea() {
  const { response, error } = useAppContext();

  if (!response && !error) {
    return <NoResponseMessage />;
  }

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

export default ResponseArea;
