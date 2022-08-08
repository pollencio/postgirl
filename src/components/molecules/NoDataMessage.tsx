import styled from 'styled-components';
import { Icon } from '@superys/momo-ui';
import FlexContainer from '../atoms/FlexContainer';

type NoDataMesageProps = { icon: string; subtitle?: string; text?: string };

function NoDataMessage({ icon, subtitle, text }: NoDataMesageProps) {
  return (
    <FlexContainer justifyContent="center" alignItems="center">
      <NoDataStyled>
        {icon && <Icon icon={icon} size={110} />}
        {subtitle && <h4 className="subtitle">{subtitle}</h4>}
        {text && <p>{text}</p>}
      </NoDataStyled>
    </FlexContainer>
  );
}

const NoDataStyled = styled.div`
  text-align: center;
  width: 90%;
  max-width: 270px;
  margin: 15% auto;
  padding: 30% 0;
  opacity: 50%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2% 0;
  }
`;

export default NoDataMessage;
