import styled from 'styled-components';

type FlexContainerProps = {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  gap?: number;
  wrap?: boolean;
};

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap}px;
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : '')};
`;

export default FlexContainer;
