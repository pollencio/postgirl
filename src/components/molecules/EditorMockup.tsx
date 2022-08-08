import { TertiaryButton } from '@superys/momo-ui';
import { useState } from 'react';
import styled from 'styled-components';
import FlexContainer from '../atoms/FlexContainer';

const DUMMY_CODE = {
  YAUN: "it's alive!",
  'alive?': "YAUN it's... ALIVE!!!",
};

const MENU_OPTIONS = ['none', 'raw', 'binary'];
const RAW_TYPES = ['Text', 'JSON', 'HTML', 'XML'];

function EditorMockup() {
  const [menuOption] = useState<string | null>('raw');
  const [rawType] = useState<string | null>('Text');

  return (
    <StyledEditorMockup>
      <FlexContainer alignItems="flex-start" gap={10} wrap>
        <div className="buttons-menu">
          {MENU_OPTIONS.map((item) => (
            <TertiaryButton
              modifiers="small"
              className={menuOption === item ? 'selected' : ''}
            >
              {item}
            </TertiaryButton>
          ))}
        </div>
        {menuOption === 'raw' && (
          <select value={rawType ? rawType : ''}>
            {RAW_TYPES.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        )}
      </FlexContainer>
      <code>{JSON.stringify(DUMMY_CODE)}</code>
    </StyledEditorMockup>
  );
}

const StyledEditorMockup = styled.div`
  height: 70vh; /* TODO: change to adapt to the screen size */
  background-color: #272727;
  padding: 12px;
  margin: 0 -23px;
  .buttons-menu > * {
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.palette.neutral[800]};
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &.selected {
      background-color: ${({ theme }) => theme.palette.neutral[700]};
    }
  }
  /* TODO: remove when select is added to momo-ui */
  select {
    color: #ffffff;
    background-color: ${({ theme }) => theme.palette.neutral[800]};
    padding: 6px 16px;
    font-family: Quicksand, Verdana;
    font-weight: 600;
    border-radius: 100px;
    cursor: pointer;
    border: none;
    box-sizing: border-box;
    -webkit-transition: background-color 0.2s linear, color 0.2s linear;
    transition: background-color 0.2s linear, color 0.2s linear;
    line-height: 1.15;
  }
`;

export default EditorMockup;
