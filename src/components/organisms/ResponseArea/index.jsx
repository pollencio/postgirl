import styled from 'styled-components';
import useAppContext from '../../../state/useAppContext';
import NoResponseMessage from '../../molecules/NoResponseMessage';
import TabAreas from '../../templates/TabAreas';
import ResponseHeaders from './ResponseHeaders';
import ResponseCookies from './ResponseCookies';
import { defaultTheme, blue, neutral } from '@superys/momo-ui';

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

  const { status, headers } = response;
  const headersNumber = Object.keys(headers || {}).length;

  return (
    <TabAreas
      tabs={[`Body`, `Cookies`, `Headers (${headersNumber})`]}
      metadata={<ResponseMetadata status={status} />}
      areas={[<Body />, <ResponseCookies />, <ResponseHeaders />]}
    />
  );
}

function ResponseMetadata({ status, time, size }) {
  return (
    <StyledMetadata>
      <div>
        Status: <span className="data">{status || '-'}</span>
      </div>
      <div>
        Time: <span className="data">{time ? `${time} ms` : '-'}</span>
      </div>
      <div>
        Size: <span className="data">{size || '-'}</span>
      </div>
    </StyledMetadata>
  );
}

const StyledMetadata = styled.div`
  display: flex;
  gap: 13px;
  font-weight: bold;
  & > *:not(:last-child) {
    border-right: 1px solid ${neutral[400]};
    padding-right: 13px;
  }
  .data {
    color: ${blue[300]};
  }
`;

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
