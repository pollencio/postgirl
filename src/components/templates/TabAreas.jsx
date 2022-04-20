import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { defaultTheme } from '@superys/momo-ui';

function TabAreas({
  isPrimary,
  tabs,
  areas,
  selectedIndex: propsSelectedIndex,
  metadata,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // if parent wants to select a tab
    if (propsSelectedIndex && propsSelectedIndex !== null) {
      setSelectedIndex(propsSelectedIndex);
    }
  }, [propsSelectedIndex]);

  return (
    <StyledTabAreas isPrimary={isPrimary}>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={`primary-tab-${index}`}
            text={tab}
            isPrimary={isPrimary}
            data-selected={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {metadata ? <div className="metadata">{metadata}</div> : null}

      <div className="areas">
        {areas.map((area, index) => (
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

const StyledTabAreas = styled.div`
  .tabs {
    display: flex;
    & > * {
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 17px;
      }
    }
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

  /* Hide primary tabs in desktop and show all its areas */
  @media (min-width: 1000px) {
    ${(props) =>
      props.isPrimary === true &&
      css`
        .tabs {
          display: none;
        }
        .areas > * {
          display: block;
        }
      `}
  }
`;

function Tab({ isPrimary, text, ...props }) {
  if (isPrimary) {
    return (
      <StyledPrimaryTab className="subtitle" {...props}>
        {text}
      </StyledPrimaryTab>
    );
  } else {
    return <StyledSecondaryTab {...props}>{text}</StyledSecondaryTab>;
  }
}

const StyledPrimaryTab = styled.h5`
  text-align: center;
  padding: 8px 0;
  width: 100px;
  opacity: 80%;
  margin: 0;
  &[data-selected='true'] {
    border-bottom: 2px solid ${defaultTheme.textColor};
    opacity: 100%;
  }
`;

const StyledSecondaryTab = styled.p`
  padding: 3px 0;
  opacity: 65%;
  margin: 0;
  font-weight: bold;
  &[data-selected='true'] {
    color: ${defaultTheme.primaryColor};
    border-bottom: 2px solid ${defaultTheme.primaryColor};
    opacity: 100%;
  }
`;

export default TabAreas;
