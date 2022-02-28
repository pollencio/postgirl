import JSONEditor from '../../../molecules/JSONEditor';
import useAppContext from '../../../../state/useAppContext';
import styled from 'styled-components';

function Body() {
  const { response } = useAppContext();

  return (
    <EditorContainer>
      <JSONEditor
        content={{ json: response.data || {} }}
        readOnly={true}
        mainMenuBar={false}
        navigationBar={false}
        mode="code"
      />
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
  height: 300px;
`;

export default Body;
