import styled from "styled-components";
import { Icon } from "@superys/momo-ui";

type NoDataMesageProps = { icon: string; subtitle?: string; text?: string };

function NoDataMessage({ icon, subtitle, text }: NoDataMesageProps) {
  return (
    <NoDataStyled>
      {icon && <Icon icon={icon} size={110} />}
      {subtitle && <h4 className="subtitle">{subtitle}</h4>}
      {text && <p>{text}</p>}
    </NoDataStyled>
  );
}

const NoDataStyled = styled.div`
  text-align: center;
  width: 90%;
  max-width: 270px;
  margin: 15% auto;
  opacity: 50%;
`;

export default NoDataMessage;
