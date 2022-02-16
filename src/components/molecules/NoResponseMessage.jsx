import styled from 'styled-components';
import { Icon, red } from '@superys/momo-ui';

function NoResponseMessage({ error, isLoading, cancelRequest }) {
  const icon = error ? 'warning-circle' : isLoading ? '' : 'butterfly';
  const text = error
    ? error.message
    : isLoading
    ? 'Sending request ...'
    : 'Enter a URL and click send to get a response';

  return (
    <NoResponseStyled error={error !== null} isLoading={isLoading}>
      <h4 className="subtitle">{text}</h4>
      <Icon icon={icon} size={110} />

      {isLoading ? <Button onClick={cancelRequest}>Cancel</Button> : null}
    </NoResponseStyled>
  );
}

const NoResponseStyled = styled.div`
  text-align: center;
  width: 90%;
  max-width: 270px;
  margin: 30% auto;
  opacity: 50%;

  ${(props) =>
    props.error
      ? `
    color: ${red[200]};
    opacity: 100%;
      `
      : ''}
`;

export default NoResponseMessage;
