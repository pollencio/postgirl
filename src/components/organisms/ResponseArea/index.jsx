import useAppContext from '../../../state/useAppContext';
import NoResponseMessage from '../../molecules/NoResponseMessage';
import TabAreas from '../../templates/TabAreas';
import HeadersTable from './HeadersTable';

function ResponseArea() {
  const { response, error, isLoading, cancelRequest } = useAppContext();

  if (Object.keys(response).length === 0) {
    return (
      <NoResponseMessage
        error={error}
        isLoading={isLoading}
        cancelRequest={cancelRequest}
      />
    );
  }

  // const headersNumber = Object.keys(headers || {}).length;

  return (
    <TabAreas
      tabs={[`Body`, `Cookies`, `Headers`]}
      areas={[<Body />, 'Cookies', <HeadersTable />]}
    />
  );
}

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

export default ResponseArea;