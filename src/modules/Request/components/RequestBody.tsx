import EditorMockup from '../../../components/molecules/EditorMockup';
// import JSONEditor from '../../../components/molecules/JSONEditor';
// import useAppContext from '../../../state/useAppContext';

function Body() {
  // const { request, setRequestElement } = useAppContext();

  return (
    // <JSONEditor
    //   content={request.data || {}}
    //   mainMenuBar={false}
    //   navigationBar={false}
    //   mode="code"
    //   onChange={(newData) => setRequestElement('data', newData)}
    // />
    <EditorMockup />
  );
}

export default Body;
