import styled from 'styled-components';
// import JSONEditor from '../../../components/molecules/JSONEditor';
// import useAppContext from '../../../state/useAppContext';
import EditorMockup from '../../../components/molecules/EditorMockup';

function Body() {
  // const { response } = useAppContext();

  return (
    <EditorContainer>
      {/* <JSONEditor
        content={{ json: response.data || {} }}
        readOnly={true}
        mainMenuBar={false}
        navigationBar={false}
        mode="code"
      /> */}
      <EditorMockup />
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
  height: 300px;
`;

export default Body;
