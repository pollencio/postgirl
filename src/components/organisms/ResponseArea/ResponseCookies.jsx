import styled from 'styled-components';
import useAppContext from '../../../state/useAppContext';
import StaticTable from '../../templates/StaticTable';
import { Icon } from '@superys/momo-ui';

function ResponseCookies() {
  const {
    response: { cookies },
  } = useAppContext();

  if (cookies) {
    return <StaticTable tableKey="response-cookies" data={cookies} />;
  } else {
    return <NoCookiesMessage />;
  }
}

function NoCookiesMessage() {
  return (
    <NoResponseStyled>
      <Icon icon="cookie" size={110} />
      <h4 className="subtitle">No cookies yet</h4>
      <p>Find all your cookies and their associated domains here.</p>
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

export default ResponseCookies;
