import styled from 'styled-components';
import useAppContext from '../../state/useAppContext';
import NoResponseMessage from '../../components/molecules/NoResponseMessage';
import TabAreas from '../../components/templates/TabAreas';
import ResponseHeaders from './components/ResponseHeaders';
import ResponseCookies from './components/ResponseCookies';
import ResponseBody from './components/ResponseBody';
import { ResponseType } from '../../types';

function ResponseArea() {
  const { response, error, isLoading, cancelRequest } = useAppContext();

  const { status, headers, time, size } = response;
  const headersNumber = Object.keys(headers || {}).length;

  return (
    <>
      <DesktopDivider>Response</DesktopDivider>
      {Object.keys(response || {}).length === 0 ? (
        <NoResponseMessage
          error={error}
          isLoading={isLoading}
          cancelRequest={cancelRequest}
        />
      ) : (
        <TabAreas
          tabs={[`Body`, `Cookies`, `Headers (${headersNumber})`]}
          metadata={
            <ResponseMetadata status={status} time={time} size={size} />
          }
          areas={[<ResponseBody />, <ResponseCookies />, <ResponseHeaders />]}
        />
      )}
    </>
  );
}

function ResponseMetadata({ status, time, size }: ResponseType) {
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
    border-right: 1px solid ${({ theme }) => theme.palette.neutral[400]};
    padding-right: 13px;
  }
  .data {
    color: ${({ theme }) => theme.palette.green[200]};
  }
`;

const DesktopDivider = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.neutral[500]};
  padding-top: 10px;
  display: none;
  margin-top: 30px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export default ResponseArea;
