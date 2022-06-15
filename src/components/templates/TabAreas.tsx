import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "@superys/momo-ui";

type TabAreasProps = {
  isPrimary: boolean;
  tabs: string[];
  areas: ReactNode[];
  selectedIndex: number | null;
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
            data-selected={props.selectedIndex === index}
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

const StyledTabAreas = styled.div<{ isPrimary: boolean }>`
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
    &[data-selected="true"] {
      display: block;
    }
  }
`;

type TabProps = {
  isPrimary: boolean;
  text: string;
  "data-selected": boolean;
  onClick: () => void;
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
  text-align: center;
  padding: 8px 0;
  width: 100px;
  opacity: 80%;
  margin: 0;
  &[data-selected="true"] {
    border-bottom: 2px solid ${defaultTheme.textColor};
    opacity: 100%;
  }
`;

const StyledSecondaryTab = styled.p<TabProps>`
  padding: 3px 0;
  opacity: 65%;
  margin: 0;
  font-weight: bold;
  &[data-selected="true"] {
    color: ${defaultTheme.primaryColor};
    border-bottom: 2px solid ${defaultTheme.primaryColor};
    opacity: 100%;
  }
`;

export default TabAreas;
