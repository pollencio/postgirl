import styled from 'styled-components';
import { Icon, red, TertiaryButton } from '@superys/momo-ui';
import { ErrorType } from '../../types';

type NoResponseProps = {
  error: ErrorType;
  isLoading: boolean;
  cancelRequest: () => void;
};

function NoResponseMessage(props: NoResponseProps) {
  const icon = props.error ? 'warning-circle' : 'butterfly';
  const text = props.error
    ? props.error.message
    : props.isLoading
    ? 'Sending request ...'
    : 'Enter a URL and click send to get a response';

  return (
    <NoResponseStyled error={props.error !== null} isLoading={props.isLoading}>
      <h4 className="subtitle">{text}</h4>

      {props.isLoading ? (
        <TertiaryButton onClick={props.cancelRequest}>Cancel</TertiaryButton>
      ) : (
        <Icon icon={icon} size={110} weight="light" />
      )}
    </NoResponseStyled>
  );
}

const NoResponseStyled = styled.div<{ error: boolean; isLoading: boolean }>`
  color: ${(props) => props.theme.palette.neutral[600]};
  text-align: center;
  width: 90%;
  max-width: 270px;
  margin: 30% auto;

  ${({ error }) => (error ? `color: ${red[200]};` : '')}/* ${({
    isLoading,
    error,
  }) => (!isLoading && !error ? 'opacity: 50%;' : '')} */
`;

export default NoResponseMessage;
