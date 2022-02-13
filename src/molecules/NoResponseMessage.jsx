import styled from 'styled-components';
import { Icon } from '@superys/momo-ui';

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
  opacity: 50%;
`;

export default NoResponseMessage;
