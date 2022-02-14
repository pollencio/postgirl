import NoResponseMessage from '../molecules/NoResponseMessage';

function ResponseArea({ response, error }) {
  if (!response && !error) {
    return <NoResponseMessage />;
  }
  return (
    <>
      {error ? (
        <code>{error}</code>
      ) : (
        <code>{JSON.stringify(response.data)}</code>
      )}
    </>
  );
}

export default ResponseArea;
