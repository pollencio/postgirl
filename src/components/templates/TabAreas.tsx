import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

type TabAreasProps = {
  tabs: string[];
  areas: ReactNode[];
  isPrimary?: boolean;
  selectedIndex?: number;
  metadata?: ReactNode;
};

function TabAreas(props: TabAreasProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // if parent wants to select a tab
    if (props.selectedIndex && props.selectedIndex !== null) {
      setSelectedIndex(props.selectedIndex);
    }
  }, [props.selectedIndex]);

  return (
    <StyledTabAreas isPrimary={props.isPrimary}>
      <div className="tabs">
        {props.tabs.map((tab, index) => (
          <Tab
            key={`primary-tab-${index}`}
            text={tab}
            isPrimary={props.isPrimary}
            data-selected={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {props.metadata ? <div className="metadata">{props.metadata}</div> : null}

      <div className="areas">
        {props.areas.map((area, index) => (
          <div
            key={`primary-area-${index}`}
            data-selected={selectedIndex === index}
          >
            {area}
          </div>
        ))}
      </div>
    </StyledTabAreas>
  );
}

const StyledTabAreas = styled.div<{ isPrimary?: boolean }>`
  .tabs {
    display: flex;
    gap: 17px;
    ${(props) =>
      props.isPrimary === true
        ? `
        justify-content: center;
        margin-bottom: 20px;
        `
        : `
        justify-content: left;
        margin-bottom: 30px;
      `}
  }
  .metadata {
    margin-bottom: 13px;
  }
  .areas > * {
    display: none;
    &[data-selected='true'] {
      display: block;
    }
  }
`;

type TabProps = {
  text: string;
  'data-selected': boolean;
  onClick: () => void;
  isPrimary?: boolean;
};

function Tab(props: TabProps) {
  if (props.isPrimary) {
    return (
      <StyledPrimaryTab className="subtitle" {...props}>
        {props.text}
      </StyledPrimaryTab>
    );
  } else {
    return <StyledSecondaryTab {...props}>{props.text}</StyledSecondaryTab>;
  }
}

const StyledPrimaryTab = styled.h5<TabProps>`
  color: ${(props) => props.theme.palette.neutral[500]};
  text-align: center;
  padding: 8px 0;
  width: 100px;
  margin: 0;
  &[data-selected='true'] {
    color: ${(props) => props.theme.textColor.main};
    border-bottom: 2px solid ${(props) => props.theme.textColor.main};
  }
`;

const StyledSecondaryTab = styled.p<TabProps>`
  color: ${(props) => props.theme.palette.neutral[600]};
  padding: 3px 0;
  margin: 0;
  font-weight: bold;
  &[data-selected='true'] {
    color: ${(props) => props.theme.primary.hover};
    border-bottom: 2px solid ${(props) => props.theme.primary.hover};
  }
`;

export default TabAreas;
